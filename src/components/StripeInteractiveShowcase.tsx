'use client';

import React, { useState } from 'react';
import {
  FileText,
  MapPin,
  Calculator,
  Users,
  ShieldCheck,
  Send,
  CheckCircle2,
  RefreshCw,
  Zap,
  ArrowRight,
  Sliders,
  Radio,
  Check,
  Building2,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export function StripeInteractiveShowcase() {
  // Card 1: DOT Letting Portal Scraper
  const [selectedPortal, setSelectedPortal] = useState<'ncdot' | 'scdot' | 'commercial'>('ncdot');
  const [scanning, setScanning] = useState(false);

  // Card 2: Barn Mobilization Distance Matrix (Huntersville, NC Base)
  const [distanceMiles, setDistanceMiles] = useState(14.2);

  // Card 3: Master Spreadsheet Unit Rate Calculator
  const [siltFenceQty, setSiltFenceQty] = useState(18500);
  const [seedingQty, setSeedingQty] = useState(42000);

  // Card 4: Prime GC Plan-Holder Directory
  const [selectedPrime, setSelectedPrime] = useState<'blythe' | 'lane' | 'rea'>('blythe');

  // Card 5: Pre-Flight Estimator Approval Gate
  const [approvalStatus, setApprovalStatus] = useState<'review' | 'approved'>('review');

  // Card 6: Multi-Prime Quote Dispatcher
  const [selectedPrimesForDispatch, setSelectedPrimesForDispatch] = useState<string[]>(['blythe', 'lane', 'rea']);

  // Mobilization Tier calculation from Huntersville barn
  const getMobilizationInfo = (miles: number) => {
    if (miles <= 25) return { tier: 'Tier 1 (<25 mi)', cost: 3500, time: '24 min', badge: 'Local Dispatch' };
    if (miles <= 50) return { tier: 'Tier 2 (25-50 mi)', cost: 5200, time: '48 min', badge: 'Regional Haul' };
    if (miles <= 80) return { tier: 'Tier 3 (50-80 mi)', cost: 7800, time: '1 hr 18 min', badge: 'Extended Haul' };
    return { tier: 'Tier 4 (>80 mi)', cost: 11500, time: '2+ hrs', badge: 'Per Diem Surcharge' };
  };

  const mob = getMobilizationInfo(distanceMiles);

  // Rate math
  const siltTotal = siltFenceQty * 3.15;
  const seedingTotal = seedingQty * 0.42;
  const grandTotal = siltTotal + seedingTotal + 23370 + 21600 + mob.cost;

  const handleScanPortals = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
    }, 700);
  };

  const togglePrimeDispatch = (id: string) => {
    setSelectedPrimesForDispatch((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const primeData = {
    blythe: {
      name: 'Blythe Construction Inc.',
      estimator: 'Marcus Vance (Chief Estimator)',
      email: 'estimating@blytheconstruction.com',
      phone: '(704) 555-0192',
      bidStatus: 'Prime Bidder #1',
    },
    lane: {
      name: 'The Lane Construction Corp.',
      estimator: 'Sarah Jenkins (Highway Bids)',
      email: 'bids.carolinas@laneconstruct.com',
      phone: '(704) 555-0144',
      bidStatus: 'Prime Bidder #2',
    },
    rea: {
      name: 'Rea Contracting (Div of Reeves)',
      estimator: 'Dave Kowalski (Civil Takeoffs)',
      email: 'quotes@reacontracting.com',
      phone: '(704) 555-0188',
      bidStatus: 'Prime Bidder #3',
    },
  };

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--color-border)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Stripe Two-Tone Category Eyebrow & Master Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#533AFD]/20 bg-[#533AFD]/8 px-3 py-1 text-xs font-mono text-[#533AFD] dark:text-[#7A68FF] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Subcontractor Estimating Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)] leading-tight">
            Six automated pillars for DOT bidding.{' '}
            <span className="text-[var(--color-text-secondary)] opacity-75 font-normal">
              From state letting scraping to spreadsheet rate math and prime GC quote dispatch.
            </span>
          </h2>
        </div>

        {/* 6-Card Interactive Moving Elements Grid (Stripe Section 2 Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: DOT Letting Portal Scraper */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Pillar 1 • Letting Ingestion
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <FileText className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Continuous state letting scraper
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Extracts project proposals, plan sheets, and letting notices before prime GC submission deadlines.
              </p>
            </div>

            {/* Interactive Portal Switcher */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex rounded-md bg-[var(--color-panel-subtle)] p-1 border border-[var(--color-border)] text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedPortal('ncdot')}
                  className={`flex-1 py-1.5 rounded font-medium transition-all ${
                    selectedPortal === 'ncdot'
                      ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-xs font-bold'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  NCDOT
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPortal('scdot')}
                  className={`flex-1 py-1.5 rounded font-medium transition-all ${
                    selectedPortal === 'scdot'
                      ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-xs font-bold'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  SCDOT
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPortal('commercial')}
                  className={`flex-1 py-1.5 rounded font-medium transition-all ${
                    selectedPortal === 'commercial'
                      ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-xs font-bold'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  Commercial
                </button>
              </div>

              <div className="rounded-lg bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[var(--color-text-primary)]">
                    {selectedPortal === 'ncdot'
                      ? 'Oct 14 Letting (18 Contracts)'
                      : selectedPortal === 'scdot'
                      ? 'Oct 21 Letting (12 Contracts)'
                      : 'Charlotte Metro (6 Active Sites)'}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                    100% Ingested
                  </span>
                </div>
                <div className="text-[11px] text-[var(--color-text-secondary)] truncate">
                  {selectedPortal === 'ncdot'
                    ? 'C204891: I-77 Widening & Bridge Replacement'
                    : selectedPortal === 'scdot'
                    ? 'SC-549102: I-85 Pavement & Grading Scope'
                    : 'Commercial: Huntersville Logistics Park Site'}
                </div>
              </div>

              <button
                type="button"
                onClick={handleScanPortals}
                disabled={scanning}
                className="w-full h-8 text-xs font-semibold rounded bg-[#533AFD] hover:bg-[#432DE0] text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {scanning ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    Checking Letting Addendums...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-3 h-3" />
                    Simulate Daily Letting Scan
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Barn Mobilization Distance Matrix */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Pillar 2 • Barn Distance Guard
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Mobilization &amp; haul matrix
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Calculates driving mileage from Huntersville, NC barn to project mile-markers to budget equipment transport.
              </p>
            </div>

            {/* Interactive Distance Slider */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--color-text-secondary)]">Distance from Shop:</span>
                <span className="font-bold font-mono text-[var(--color-text-primary)] text-sm">
                  {distanceMiles.toFixed(1)} miles
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="90"
                step="1"
                value={distanceMiles}
                onChange={(e) => setDistanceMiles(parseFloat(e.target.value))}
                className="w-full accent-[#533AFD] cursor-pointer"
              />

              <div className="rounded-lg bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-text-secondary)]">Mobilization Tier:</span>
                  <span className="font-bold text-[#533AFD] dark:text-[#7A68FF] font-mono">{mob.tier}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-text-secondary)]">Equipment Haul Budget:</span>
                  <span className="font-bold font-mono text-[var(--color-text-primary)]">${mob.cost.toLocaleString()}.00</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[var(--color-text-muted)]">
                  <span>Drive Time from Shop:</span>
                  <span>{mob.time} one-way</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Master Spreadsheet Rate Calculator */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Pillar 3 • Spreadsheet Rate Engine
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Calculator className="w-4 h-4 text-amber-500" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Deterministic unit price sync
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Applies exact line-item rates from your master pricing spreadsheet so math never hallucinates.
              </p>
            </div>

            {/* Interactive Quantity Recalculator */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded bg-[var(--color-panel-subtle)] border border-[var(--color-border)]">
                  <div className="min-w-0 pr-2">
                    <div className="font-bold text-[var(--color-text-primary)] truncate">Temporary Silt Fence</div>
                    <div className="text-[10px] text-[var(--color-text-muted)] font-mono">{siltFenceQty.toLocaleString()} LF @ $3.15/LF</div>
                  </div>
                  <span className="font-mono font-bold text-[var(--color-text-primary)] shrink-0">
                    ${siltTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-[var(--color-panel-subtle)] border border-[var(--color-border)]">
                  <div className="min-w-0 pr-2">
                    <div className="font-bold text-[var(--color-text-primary)] truncate">Seeding &amp; Mulching</div>
                    <div className="text-[10px] text-[var(--color-text-muted)] font-mono">{seedingQty.toLocaleString()} SY @ $0.42/SY</div>
                  </div>
                  <span className="font-mono font-bold text-[var(--color-text-primary)] shrink-0">
                    ${seedingTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <span className="font-bold text-[var(--color-text-primary)]">Preliminary Subcontractor Bid:</span>
                <span className="font-bold font-mono text-[#057A55] dark:text-emerald-400 text-sm">
                  ${grandTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Prime GC Plan-Holder Directory */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Pillar 4 • Prime GC Directory
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Users className="w-4 h-4 text-blue-500" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Matched prime plan-holders
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Scrapes state addendums to pinpoint verified general contractors bidding the project and their chief estimators.
              </p>
            </div>

            {/* Interactive Prime GC Tabs */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex rounded-md bg-[var(--color-panel-subtle)] p-1 border border-[var(--color-border)] text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedPrime('blythe')}
                  className={`flex-1 py-1 rounded font-medium transition-all ${
                    selectedPrime === 'blythe'
                      ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-xs font-bold'
                      : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  Blythe
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPrime('lane')}
                  className={`flex-1 py-1 rounded font-medium transition-all ${
                    selectedPrime === 'lane'
                      ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-xs font-bold'
                      : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  Lane
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPrime('rea')}
                  className={`flex-1 py-1 rounded font-medium transition-all ${
                    selectedPrime === 'rea'
                      ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-xs font-bold'
                      : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  Rea
                </button>
              </div>

              <div className="rounded-lg bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] text-xs space-y-1.5">
                <div className="font-bold text-[var(--color-text-primary)] text-sm">
                  {primeData[selectedPrime].name}
                </div>
                <div className="text-[11px] text-[var(--color-text-secondary)]">
                  Contact: <strong className="text-[var(--color-text-primary)]">{primeData[selectedPrime].estimator}</strong>
                </div>
                <div className="text-[11px] font-mono text-[#533AFD] dark:text-[#7A68FF] truncate">
                  {primeData[selectedPrime].email}
                </div>
                <div className="text-[10px] text-[var(--color-text-muted)] flex items-center justify-between pt-1 border-t border-[var(--color-border)]/60">
                  <span>{primeData[selectedPrime].phone}</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">Verified Plan Holder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Pre-Flight Estimator Approval Gate */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Pillar 5 • Human Signoff Gate
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <ShieldCheck className="w-4 h-4 text-[#533AFD]" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Zero automated email sends
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Mandatory human review gate holds every preliminary bid in staging until the estimator clicks approve.
              </p>
            </div>

            {/* Interactive Review Switcher */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="rounded-lg bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[var(--color-text-primary)]">Gate Status:</span>
                  {approvalStatus === 'review' ? (
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20 font-mono text-[10px]">
                      HELD IN REVIEW
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20 font-mono text-[10px]">
                      1-CLICK APPROVED
                    </span>
                  )}
                </div>

                <div className="space-y-1 text-[11px] text-[var(--color-text-secondary)]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>Line items validated against letting sheet</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>Huntersville barn mileage verified (14.2 mi)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>Unit rates matched to master spreadsheet</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setApprovalStatus((prev) => (prev === 'review' ? 'approved' : 'review'))}
                className={`w-full h-8 text-xs font-semibold rounded transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  approvalStatus === 'review'
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] border border-[var(--color-border)]'
                }`}
              >
                {approvalStatus === 'review' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Authorize &amp; Sign Off Bid Package
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-3 h-3" />
                    Revert to Staging Review
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 6: Multi-Prime Quote Dispatcher */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#00D4FF]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Pillar 6 • Quote Dispatcher
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Send className="w-4 h-4 text-[#00D4FF]" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Customized prime GC proposals
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Generates formal quote letters tailored to each prime contractor with itemized scopes and attachments.
              </p>
            </div>

            {/* Interactive Multi-Prime Dispatch Selector */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="text-xs space-y-1.5">
                <div className="text-[11px] text-[var(--color-text-secondary)] font-medium">
                  Select Prime GCs for Quote Packet:
                </div>
                <div className="flex gap-1.5">
                  {[
                    { id: 'blythe', label: 'Blythe' },
                    { id: 'lane', label: 'Lane' },
                    { id: 'rea', label: 'Rea' },
                  ].map((p) => {
                    const isSelected = selectedPrimesForDispatch.includes(p.id);
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => togglePrimeDispatch(p.id)}
                        className={`flex-1 py-1 text-xs rounded border transition-all cursor-pointer font-medium ${
                          isSelected
                            ? 'bg-[#533AFD]/10 border-[#533AFD] text-[#533AFD] dark:text-[#7A68FF] font-bold'
                            : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
                        }`}
                      >
                        {isSelected ? '✓ ' : ''}
                        {p.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quote Letter Preview */}
              <div className="rounded-lg bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] text-xs space-y-1">
                <div className="text-[10px] uppercase font-mono text-[var(--color-text-muted)]">
                  Generated Proposal Packet
                </div>
                <div className="font-bold text-[var(--color-text-primary)] truncate">
                  Contract C204891 Subcontractor Quote
                </div>
                <div className="text-[11px] text-[var(--color-text-secondary)]">
                  Scope: <span className="font-semibold">Erosion Control &amp; Hydroseeding</span>
                </div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono pt-1">
                  Ready to send to {selectedPrimesForDispatch.length} Prime GC Estimators
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
