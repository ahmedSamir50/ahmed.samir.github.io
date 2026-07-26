/* =========================================================
   Live NuGet download counts + package icon upgrade
   ========================================================= */

'use strict';

(function () {
  const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
  const SEARCH_URL =
    'https://azuresearch-usnc.nuget.org/query?q=packageid:{id}&prerelease=true&semVerLevel=2.0.0';
  const ICON_URL =
    'https://api.nuget.org/v3-flatcontainer/{id}/{version}/icon';

  function formatCount(n) {
    try {
      return new Intl.NumberFormat('en', {
        notation: n >= 1000 ? 'compact' : 'standard',
        maximumFractionDigits: 1,
      }).format(n);
    } catch {
      return String(n);
    }
  }

  function cacheKey(packageId) {
    return `nuget-meta:${packageId.toLowerCase()}`;
  }

  function readCache(packageId) {
    try {
      const raw = sessionStorage.getItem(cacheKey(packageId));
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed.count !== 'number' || !parsed.ts) return null;
      if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
      return parsed;
    } catch {
      return null;
    }
  }

  function writeCache(packageId, meta) {
    try {
      sessionStorage.setItem(
        cacheKey(packageId),
        JSON.stringify({ ...meta, ts: Date.now() })
      );
    } catch {
      /* ignore quota / private mode */
    }
  }

  /** Flatcontainer versions omit SemVer +build metadata. */
  function normalizeVersion(version) {
    if (!version) return null;
    return String(version).split('+')[0];
  }

  async function fetchPackageMeta(packageId) {
    const cached = readCache(packageId);
    if (cached) return cached;

    const url = SEARCH_URL.replace('{id}', encodeURIComponent(packageId));
    const res = await fetch(url);
    if (!res.ok) throw new Error(`NuGet search ${res.status}`);
    const data = await res.json();
    const dataList = Array.isArray(data.data) ? data.data : [];
    const match =
      dataList.find(
        (p) => (p.id || '').toLowerCase() === packageId.toLowerCase()
      ) || dataList[0];
    // totalDownloads = sum across ALL package versions (not a single release)
    const count =
      typeof match?.totalDownloads === 'number'
        ? match.totalDownloads
        : typeof match?.totaldownloads === 'number'
          ? match.totaldownloads
          : null;
    if (count === null) throw new Error('No totalDownloads in response');
    const version = normalizeVersion(match?.version);
    const meta = { count, version };
    writeCache(packageId, meta);
    return meta;
  }

  function chipsFor(packageId) {
    return [...document.querySelectorAll('[data-nuget-package]')].filter(
      (el) => el.getAttribute('data-nuget-package') === packageId
    );
  }

  function iconsFor(packageId) {
    return [...document.querySelectorAll('[data-nuget-icon]')].filter(
      (el) => el.getAttribute('data-nuget-icon') === packageId
    );
  }

  function fillChips(packageId, count) {
    chipsFor(packageId).forEach((chip) => {
      const el = chip.querySelector('[data-nuget-count]');
      if (el) el.textContent = formatCount(count);
      chip.hidden = false;
    });
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  function hideChips(packageId) {
    chipsFor(packageId).forEach((chip) => {
      chip.hidden = true;
    });
  }

  /** Probe NuGet icon; on success swap img src, on failure keep local fallback. */
  function upgradeIcons(packageId, version) {
    const imgs = iconsFor(packageId);
    if (!imgs.length || !version) return;

    const iconUrl = ICON_URL.replace('{id}', packageId.toLowerCase()).replace(
      '{version}',
      encodeURIComponent(version)
    );

    const probe = new Image();
    probe.onload = () => {
      imgs.forEach((img) => {
        img.src = iconUrl;
      });
    };
    probe.onerror = () => {
      /* keep local fallback src */
    };
    probe.src = iconUrl;
  }

  async function loadAll() {
    const packageEls = document.querySelectorAll(
      '[data-nuget-package], [data-nuget-icon]'
    );
    if (!packageEls.length) return;

    const ids = [
      ...new Set(
        [...packageEls]
          .map(
            (el) =>
              el.getAttribute('data-nuget-package') ||
              el.getAttribute('data-nuget-icon')
          )
          .filter(Boolean)
      ),
    ];

    await Promise.all(
      ids.map(async (id) => {
        try {
          const meta = await fetchPackageMeta(id);
          if (chipsFor(id).length) fillChips(id, meta.count);
          upgradeIcons(id, meta.version);
        } catch {
          hideChips(id);
        }
      })
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAll);
  } else {
    loadAll();
  }
})();
