---
layout: project
title: "ZVec.NET — First .NET SDK for ZVec"
slug: "zvec-net"
categories: ["open-source"]
tech: [".NET 8+", "P/Invoke", "HNSW", "RAG", "DI", "MAUI", "NuGet"]
icon: "database"
gradient_from: "cyan-500"
gradient_to: "blue-500"
description: "Production .NET SDK for Alibaba ZVec — in-process vector search with typed ODM and DI. Published on NuGet; ecosystem integration with the upstream project in progress."
order: 0
nuget_package: "ZVec.NET"
project_logo: "assets/images/projects/zvec-net-logo.png"
---

<div class="space-y-6">
  <div class="flex flex-wrap items-center gap-3">
    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-mono"
      data-nuget-package="ZVec.NET" hidden>
      <i data-lucide="download" class="w-3.5 h-3.5"></i>
      <span data-nuget-count>—</span>
      <span class="text-cyan-500/80 text-xs uppercase tracking-wider">NuGet downloads</span>
    </div>
  </div>

  <div class="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
    <h3 class="text-xl font-bold text-cyan-400 mb-4">Project Overview</h3>
    <div class="space-y-4">
      <p><strong class="text-cyan-400">Situation:</strong> .NET teams building RAG, semantic search, and edge AI lacked a first-class SDK for Alibaba’s in-process ZVec engine — vendors typically ship Python and Node first and treat .NET as an afterthought.</p>
      <p><strong class="text-cyan-400">Task:</strong> Deliver a production-grade .NET SDK that wraps the full <code class="text-slate-300">zvec_c_api</code> surface with idiomatic C#: DI, typed ODM, SafeHandles, async APIs, and mobile RIDs — not a thin P/Invoke helper.</p>
      <p><strong class="text-cyan-400">Action:</strong> Authored and published <strong class="text-slate-200">ZVec.NET</strong> on NuGet, shipped host samples (ASP.NET Minimal API, MAUI Blazor Hybrid offline RAG, Console), advanced demos (Jira RAG, CLIP ONNX), and opened an official Alibaba ecosystem integration request.</p>
      <p><strong class="text-cyan-400">Result:</strong> The first production .NET Core SDK alongside Python &amp; Node — competitive binding latency, zero Docker vector cluster for app-scale workloads, and an ELM KSA team lecture on adopting in-process vector search.</p>
    </div>
  </div>

  <div class="flex flex-wrap gap-3">
    <a href="https://github.com/ahmedSamir50/AdamSystems.ZVec.NET" target="_blank" rel="noopener"
      class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-sm font-medium transition-all">
      <i data-lucide="github" class="w-4 h-4"></i> SDK Repository
    </a>
    <a href="https://www.nuget.org/packages/ZVec.NET/" target="_blank" rel="noopener"
      class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-sm font-medium transition-all">
      <i data-lucide="package" class="w-4 h-4"></i> NuGet Package
    </a>
    <a href="https://github.com/alibaba/zvec/issues/603" target="_blank" rel="noopener"
      class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-sm font-medium transition-all">
      <i data-lucide="git-pull-request" class="w-4 h-4"></i> Alibaba Integration #603
    </a>
    <a href="https://github.com/ahmedSamir50/ZVec.Net-DemosAndPOCs" target="_blank" rel="noopener"
      class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-sm font-medium transition-all">
      <i data-lucide="flask-conical" class="w-4 h-4"></i> Demos &amp; POCs
    </a>
    <a href="https://github.com/ahmedSamir50/ZVec.Net-DemosAndPOCs/blob/main/ZVec.NET_Team_Session.html" target="_blank" rel="noopener"
      class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-sm font-medium transition-all">
      <i data-lucide="presentation" class="w-4 h-4"></i> ELM KSA Lecture
    </a>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
      <h4 class="font-bold text-slate-100 mb-3">What .NET developers get</h4>
      <ul class="space-y-2 text-sm text-slate-400">
        <li class="flex gap-2"><span>▹</span> DI-first hosts: <code class="text-slate-300">AddZVec()</code> / typed collections for ASP.NET, MAUI, Blazor Server</li>
        <li class="flex gap-2"><span>▹</span> Typed ODM via <code class="text-slate-300">ZVec.NET.Mapping</code> — POCO attributes &amp; expression filters</li>
        <li class="flex gap-2"><span>▹</span> Full engine surface: HNSW, Flat, IVF, RaBitQ, DiskANN, Vamana, Invert, FTS + hybrid rerankers</li>
        <li class="flex gap-2"><span>▹</span> <code class="text-slate-300">ReadOnlyMemory&lt;float&gt;</code> pin path &amp; SafeHandle lifecycle</li>
        <li class="flex gap-2"><span>▹</span> Natives in beta: win-x64, linux-x64, osx-arm64, android-arm64/x64</li>
      </ul>
    </div>
    <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
      <h4 class="font-bold text-slate-100 mb-3">Core Stack</h4>
      <div class="flex flex-wrap gap-2 mb-6">
        {% for t in page.tech %}
          <span class="tech-tag">{{ t }}</span>
        {% endfor %}
      </div>
      <p class="text-sm text-slate-400 leading-relaxed">Package <code class="text-slate-300">ZVec.NET</code> on NuGet · MIT · TFMs net8 / net9 / net10. In-process like SQLite — folder on disk, no vector cluster ops tax.</p>
    </div>
  </div>

  <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
    <h4 class="font-bold text-slate-100 mb-4">Examples &amp; demos</h4>
    <ul class="space-y-3 text-sm text-slate-400">
      <li class="flex gap-2"><span class="text-cyan-400">▹</span> <strong class="text-slate-200">In-repo samples:</strong> ASP.NET Minimal API, MAUI Blazor Hybrid (offline/edge RAG), and Console hosts</li>
      <li class="flex gap-2"><span class="text-cyan-400">▹</span> <strong class="text-slate-200">PDDM (Advanced):</strong> Projects Docs Deep Mind — Jira RAG navigator with Aspire + Docker</li>
      <li class="flex gap-2"><span class="text-cyan-400">▹</span> <strong class="text-slate-200">CLIP ONNX gallery:</strong> Flickr8k vision embeddings in ZVec; text or image query</li>
      <li class="flex gap-2"><span class="text-cyan-400">▹</span> <strong class="text-slate-200">ELM KSA lecture:</strong> team session deck on why in-process vector search fits .NET enterprise apps</li>
    </ul>
  </div>

  <p class="text-sm text-slate-500 leading-relaxed">
    Binding suite (same machine, 10k Flat): .NET query <span class="text-slate-300 font-mono">2.88 ms</span> vs Python <span class="text-slate-400 font-mono">4.33 ms</span> / Node <span class="text-slate-400 font-mono">4.10 ms</span>; batch insert ~<span class="text-slate-300 font-mono">16.8k</span> docs/sec vs ~7.1k / ~5.8k.
  </p>
</div>
