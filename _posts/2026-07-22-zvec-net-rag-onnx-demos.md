---
layout: default
title: "From NuGet to Production Patterns: RAG, ONNX & Edge Demos on ZVec.NET"
date: 2026-07-22
categories: ai-engineering
image: /assets/images/posts/zvec-net-demos-cover.png
---

<section class="py-24 sm:py-32 bg-navy-950">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-12">
      <span class="text-cyan-400 text-xs font-mono font-medium tracking-widest uppercase">AI Engineering · Demos</span>
      <h1 class="text-4xl sm:text-5xl font-bold text-slate-50 mt-4 leading-tight">From NuGet to Production Patterns: RAG, ONNX &amp; Edge Demos on ZVec.NET</h1>

      <div class="mt-8 flex items-center gap-4 text-slate-400 text-sm flex-wrap">
        <div class="flex items-center gap-2">
          <img src="{{ '/assets/images/ahmed-samir.png' | relative_url }}" alt="Ahmed Samir" class="w-8 h-8 rounded-full border border-cyan-500/30">
          <span class="font-semibold text-slate-200">Ahmed Samir Abd El Aal</span>
        </div>
        <span>•</span>
        <span>Lead Full Stack Engineer (.NET)</span>
        <span>•</span>
        <span>July 22, 2026</span>
      </div>
    </div>

    <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16 aspect-video bg-navy-900 group">
      <div class="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/0 transition-all"></div>
      <img src="{{ page.image | relative_url }}" alt="RAG and multimodal retrieval flowing into a vector index" class="w-full h-full object-cover">
    </div>

    <div class="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed font-inter">
      <p class="text-xl text-slate-200 leading-relaxed font-light">
        A NuGet package proves the API. Hosts prove the product shape. For ZVec.NET I keep examples in <strong class="text-slate-100">two places</strong>: samples that ship with the SDK, and a separate demos/POCs repo for advanced proofs — CLIP ONNX, Jira RAG, and more patterns landing soon.
      </p>

      <h2 class="text-2xl font-bold text-slate-50 mt-12 mb-6 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-sm">01</span>
        Two layers of examples
      </h2>
      <p>
        <strong class="text-slate-100">Layer A</strong> lives inside
        <a href="https://github.com/ahmedSamir50/AdamSystems.ZVec.NET/tree/main/samples" target="_blank" rel="noopener" class="text-cyan-400 hover:text-cyan-300">AdamSystems.ZVec.NET/samples</a>
        — the hosts you open after <code class="text-slate-300">dotnet add package ZVec.NET</code>. They are not inside the NuGet package; they are the SDK’s teaching hosts.
      </p>
      <p>
        <strong class="text-slate-100">Layer B</strong> is
        <a href="https://github.com/ahmedSamir50/ZVec.Net-DemosAndPOCs" target="_blank" rel="noopener" class="text-cyan-400 hover:text-cyan-300">ZVec.Net-DemosAndPOCs</a>
        — standalone solutions that go beyond “hello vector”: multimodal galleries, Aspire-orchestrated RAG navigators, and an expanding set of lecture-aligned demos.
      </p>

      <h2 class="text-2xl font-bold text-slate-50 mt-12 mb-6 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 text-sm">02</span>
        Layer A — In-SDK samples
      </h2>
      <p>
        Three sample hosts cover the common .NET surfaces:
      </p>
      <ul class="space-y-3 list-none p-0">
        <li class="flex gap-3"><span class="text-cyan-400 font-mono">▹</span><span><strong class="text-slate-200">ASP.NET Minimal API</strong> — DI registration, typed collections, parity-style CRUD/query endpoints you can curl from day one.</span></li>
        <li class="flex gap-3"><span class="text-cyan-400 font-mono">▹</span><span><strong class="text-slate-200">MAUI Blazor Hybrid</strong> — offline/edge RAG: embeddings and retrieval on-device (LM Studio-style local chat in the sample path), proving Android RIDs are not aspirational.</span></li>
        <li class="flex gap-3"><span class="text-cyan-400 font-mono">▹</span><span><strong class="text-slate-200">Console</strong> — the smallest loop for insert → query without a web host.</span></li>
      </ul>
      <p>
        Together they answer: “Can I wire this into the host I already run?” Yes — web, mobile hybrid, or a script.
      </p>

      <h2 class="text-2xl font-bold text-slate-50 mt-12 mb-6 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 text-sm">03</span>
        Layer B — Live external demos
      </h2>

      <div class="my-12 p-8 rounded-2xl bg-navy-900 border border-cyan-500/20 shadow-xl relative overflow-hidden group">
        <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <i data-lucide="flask-conical" class="w-32 h-32 text-cyan-400"></i>
        </div>
        <h3 class="text-cyan-400 font-bold text-lg mb-4">Runnable today in ZVec.Net-DemosAndPOCs</h3>
        <ul class="space-y-4 list-none p-0 m-0">
          <li class="flex gap-4">
            <span class="text-cyan-400 font-mono text-xl">▹</span>
            <span><strong>CLIP ONNX gallery</strong> (<code class="text-slate-300">examples/01-clip-onnx</code>): Flickr8k vision embeddings in ZVec; query by text or by image in one shared vector space. Download ONNX weights per the example README.</span>
          </li>
          <li class="flex gap-4">
            <span class="text-cyan-400 font-mono text-xl">▹</span>
            <span><strong>PDDM — Projects Docs Deep Mind</strong> (<code class="text-slate-300">Advanced/</code>): advanced Jira RAG navigator — epic context, siblings, decision comments — with ASP.NET, Blazor, Aspire, and Docker. ZVec.NET owns the on-disk store; no vector cluster sidecar.</span>
          </li>
        </ul>
      </div>

      <p>
        PDDM is the product-shaped finale: not “another chatbot,” but navigation over hierarchical work items grounded in in-process retrieval. CLIP is the multimodal proof that the same engine serves image and text without leaving .NET.
      </p>

      <h2 class="text-2xl font-bold text-slate-50 mt-12 mb-6 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-sm">04</span>
        Expanding suite — more demos landing soon
      </h2>
      <p>
        The ELM session framed a wider pattern family: simpler semantic search and RAG hosts, recommendations-style nearest-neighbour flows, and additional ONNX pipelines. Those projects are <strong class="text-slate-100">on the roadmap for the same demos repo</strong> — not inventing folder paths here. Watch
        <a href="https://github.com/ahmedSamir50/ZVec.Net-DemosAndPOCs" target="_blank" rel="noopener" class="text-cyan-400 hover:text-cyan-300">ZVec.Net-DemosAndPOCs</a>
        as the suite grows beyond PDDM and CLIP.
      </p>

      <h2 class="text-2xl font-bold text-slate-50 mt-12 mb-6 flex items-center gap-3">
        <span class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 text-sm">05</span>
        When this stack is the right call
      </h2>
      <p>
        In-process wins when latency, data residency, and “no cluster ops” matter more than multi-region multi-tenant isolation. The samples and demos show that path end-to-end: package → host → multimodal or Jira-grade RAG — still one process owning the vectors.
      </p>

      <div class="mt-16 flex flex-wrap gap-4">
        <a href="https://github.com/ahmedSamir50/AdamSystems.ZVec.NET/tree/main/samples" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-semibold hover:bg-cyan-500/20 transition-colors">
          SDK samples
        </a>
        <a href="https://github.com/ahmedSamir50/ZVec.Net-DemosAndPOCs" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-semibold hover:bg-cyan-500/20 transition-colors">
          Demos &amp; POCs
        </a>
        <a href="{{ '/projects/zvec-net/' | relative_url }}" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-sm font-medium hover:border-cyan-500/40 transition-colors">
          Project page <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>

      <div class="mt-16 p-6 rounded-xl bg-white/5 border border-white/10 italic text-slate-400 text-sm text-center">
        "SDK samples teach the API. Demos prove the architecture you would ship."
      </div>
    </div>
  </div>
</section>
