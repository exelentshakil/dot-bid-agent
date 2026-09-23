export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: "up" | "neutral" | "down";
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: "active" | "verified" | "queued" | "flagged";
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: "stripe" | "linear" | "notion" | "lovable" | "bloomberg" | "apple";
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: "dot-bid-agent",
  name: "BidForge DOT",
  badge: "v1.0 Subcontractor Bid Engine",
  tagline: "Autonomous DOT Bid Opportunity Finder & Estimator",
  description: "Continuous bid scraper, barn distance calculator, spreadsheet rate engine, and Prime GC plan-holder matcher with mandatory human approval gates.",
  archetype: "stripe",
  primaryNav: [
    { id: "cockpit", label: "Bid Pipeline Cockpit" },
    { id: "pipeline", label: "Letting Intake & Estimator" },
    { id: "records", label: "Active Project Lettings" },
  ],
  metrics: [
    {
      id: "opportunities",
      title: "DOT & Commercial Lettings",
      value: "142 Active Bids",
      change: "+18 New This Week",
      trend: "up",
      subtext: "NCDOT • SCDOT • Regional Commercial",
      badge: "Auto-Scraped Daily",
    },
    {
      id: "barn_radius",
      title: "Barn Mobilization Guard",
      value: "85 mi Radius",
      change: "Auto-Mileage Calc",
      trend: "neutral",
      subtext: "Huntersville Base • Distance Filtered",
      badge: "GPS Haul Verified",
    },
    {
      id: "pricing_sync",
      title: "Spreadsheet Pricing Match",
      value: "100% Rate Sync",
      change: "Zero Math Drift",
      trend: "up",
      subtext: "Master Unit Rates • Strict Human Approval",
      badge: "Review Required",
    },
  ],
  workflow: {
    badge: "Step 1 • Live DOT Letting & Estimate Builder",
    title: "Project Detail Extractor & Prime GC Matcher",
    description: "Simulate automated extraction of DOT project documents, mileage calculation from your barn, spreadsheet unit pricing, and prime contractor email matching.",
    inputLabel: "DOT Project Notice, Plan PDF Text, or Commercial Letting Link",
    inputPlaceholder: "Paste DOT project details, contract notice, or letting announcement...",
    defaultInput: "NCDOT Contract C204891 (I-77 Widening & Bridge Replacement, Mecklenburg & Iredell Counties). Letting Date: Oct 14, 2026. Scope items: 42,000 SY Seeding & Mulching, 18,500 LF Temporary Silt Fence, 8,200 SY Coir Fiber Matting, 450 Tons Stone for Erosion Control. Location: Mile marker 28-36. Estimated start: Dec 2026, completion: Nov 2027.",
    buttonLabel: "Build Subcontractor Bid Package",
    sampleResponse: {
      status: "ESTIMATE_BUILT_PENDING_APPROVAL",
      contract_id: "NCDOT-C204891",
      project_title: "I-77 Widening & Bridge Replacement",
      letting_date: "October 14, 2026",
      barn_headquarters: "Huntersville, NC Shop Base",
      distance_from_barn_miles: 14.2,
      mobilization_tier: "Tier 1 (<25 mi standard equipment dispatch)",
      line_item_breakdown: [
        { item: "Seeding & Mulching", quantity: "42,000 SY", unit_rate: "$0.42/SY", total: "$17,640.00" },
        { item: "Temporary Silt Fence", quantity: "18,500 LF", unit_rate: "$3.15/LF", total: "$58,275.00" },
        { item: "Coir Fiber Matting", quantity: "8,200 SY", unit_rate: "$2.85/SY", total: "$23,370.00" },
        { item: "Stone for Erosion Control", quantity: "450 TONS", unit_rate: "$48.00/TON", total: "$21,600.00" },
        { item: "Mobilization & Traffic Safety", quantity: "1 LS", unit_rate: "$3,500.00", total: "$3,500.00" },
      ],
      preliminary_subcontractor_bid: "$124,385.00",
      matched_prime_contractors: [
        {
          company: "Blythe Construction Inc",
          chief_estimator: "Mark Davis",
          bid_email: "estimating.charlotte@blytheconstruction.com",
          source: "NCDOT Official Plan Holders List",
        },
        {
          company: "Lane Construction Corp",
          chief_estimator: "Jessica Reynolds",
          bid_email: "bids.southeast@laneconstruct.com",
          source: "NCDOT Official Plan Holders List",
        },
        {
          company: "Rea Contracting LLC",
          chief_estimator: "Tom Bradley",
          bid_email: "carolina.estimating@reacontracting.com",
          source: "NCDOT Official Plan Holders List",
        },
      ],
      human_approval_gate: {
        status: "HELD_IN_DRAFT_STAGE",
        approval_required: true,
        auto_send_blocked: true,
        message: "Email drafts and line-item PDF proposals prepared. Awaiting your 1-click review and approval.",
      },
    },
  },
  table: {
    badge: "Active Opportunity Pipeline",
    title: "Tracked DOT & Commercial Bid Opportunities",
    description: "Real-time ledger tracking active DOT lettings, distance from barn, line-item totals, and matched prime contractor contacts.",
    columns: [
      { key: "id", label: "Contract ID" },
      { key: "entityName", label: "Project & Letting Agency" },
      { key: "category", label: "Scope / Division" },
      { key: "status", label: "Review Status" },
      { key: "latency", label: "Distance" },
      { key: "action", label: "Bid Estimate" },
    ],
    rows: [
      {
        id: "C204891",
        entityName: "I-77 Widening & Bridge (NCDOT)",
        category: "Erosion Control & Hydroseeding",
        status: "verified",
        latency: "14.2 mi",
        provider: "Master Rate Sheet",
        updatedAt: "10 mins ago",
        payload: {
          contract_id: "NCDOT-C204891",
          letting_date: "Oct 14, 2026",
          location: "Mecklenburg / Iredell Counties",
          distance_from_barn: "14.2 miles",
          sub_estimate_total: "$124,385.00",
          prime_gcs_matched: "Blythe Construction, Lane Construction, Rea Contracting",
          email_recipients: "3 Estimator Emails Verified",
          approval_status: "Awaiting Owner Signoff (Draft Ready)",
        },
      },
      {
        id: "C204782",
        entityName: "NC-73 Intersection Widening (NCDOT)",
        category: "Silt Fence & Slope Matting",
        status: "active",
        latency: "8.6 mi",
        provider: "Master Rate Sheet",
        updatedAt: "24 mins ago",
        payload: {
          contract_id: "NCDOT-C204782",
          letting_date: "Oct 21, 2026",
          location: "Huntersville / Lake Norman",
          distance_from_barn: "8.6 miles",
          sub_estimate_total: "$48,920.00",
          prime_gcs_matched: "Barnhill Contracting Co, Blythe Construction",
          email_recipients: "2 Estimator Emails Verified",
          approval_status: "Draft Estimate Formatted",
        },
      },
      {
        id: "CLT-2026-88",
        entityName: "Charlotte Airport Parkway Expansion",
        category: "Hydroseeding & Turf Establishment",
        status: "verified",
        latency: "22.4 mi",
        provider: "Commercial Unit Rates",
        updatedAt: "1 hour ago",
        payload: {
          contract_id: "CLT-AP-2026-88",
          letting_date: "Nov 03, 2026",
          location: "Charlotte Douglas International Area",
          distance_from_barn: "22.4 miles",
          sub_estimate_total: "$89,150.00",
          prime_gcs_matched: "Rodgers Builders, Whiting-Turner, Clancy & Theys",
          email_recipients: "4 Commercial Estimators Verified",
          approval_status: "Approved by Owner - Ready for Dispatch",
        },
      },
      {
        id: "SCDOT-46-512",
        entityName: "Fort Mill Bypass Grading (SCDOT)",
        category: "Erosion Control & Inlet Protection",
        status: "queued",
        latency: "38.1 mi",
        provider: "Out-of-State Mobilization",
        updatedAt: "2 hours ago",
        payload: {
          contract_id: "SCDOT-46-512",
          letting_date: "Nov 10, 2026",
          location: "Fort Mill / York County, SC",
          distance_from_barn: "38.1 miles (Tier 2 Mobilization)",
          sub_estimate_total: "$162,400.00",
          prime_gcs_matched: "Boggs Contracting, United Infrastructure Group",
          email_recipients: "Parsing Plan Holders Addendum",
          approval_status: "Line Items Extracted",
        },
      },
      {
        id: "C204905",
        entityName: "Division 10 On-Call Erosion Maintenance",
        category: "Emergency Stormwater Stabilization",
        status: "flagged",
        latency: "11.5 mi",
        provider: "On-Call Schedule A",
        updatedAt: "3 hours ago",
        payload: {
          contract_id: "NCDOT-C204905",
          letting_date: "Oct 28, 2026",
          location: "Mecklenburg County",
          distance_from_barn: "11.5 miles",
          sub_estimate_total: "$210,000.00",
          note: "Addendum #2 Issued with updated seeding spec",
          approval_status: "Flagged for Owner Rate Check",
        },
      },
    ],
  },
};
