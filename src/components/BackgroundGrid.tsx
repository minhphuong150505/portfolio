export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Radial gradient fade to dark on edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center top, transparent 0%, #09090b 70%)",
        }}
      />

      {/* Top cyan glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30"
        style={{
          background:
            "radial-gradient(ellipse, rgba(34, 211, 238, 0.25), transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      {/* Subtle spring green accent bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(109, 179, 63, 0.4), transparent 60%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
