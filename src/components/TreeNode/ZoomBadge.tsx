/** Badge displayed when a node can be zoomed into */
export const ZoomBadge = () => (
  <span
    className="zoom-badge"
    style={{
      fontSize: '0.75rem',
      color: '#2563eb',
      backgroundColor: '#eff6ff',
      padding: '0.25rem 0.5rem',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      fontWeight: 400,
    }}
  >
    <svg
      className="zoom-icon"
      style={{ width: '0.75rem', height: '0.75rem' }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        className="zoom-icon-path"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
      />
    </svg>
    Zoom in
  </span>
);
