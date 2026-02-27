import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring } from 'remotion';
import React from 'react';

export const AIComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const scale = spring({
    frame,
    fps,
    config: {
      damping: 12,
    },
  });

  // Central Node
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <AbsoluteFill style={{ backgroundColor: 'transparent', color: 'white', fontFamily: 'JetBrains Mono' }}>
      <div style={{ opacity, transform: `scale(${scale})`, width: '100%', height: '100%', position: 'relative' }}>
        
        {/* Central Agent Node */}
        <div style={{
          position: 'absolute',
          left: centerX - 50,
          top: centerY - 50,
          width: 100,
          height: 100,
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          boxShadow: `0 0 ${20 + Math.sin(frame / 10) * 10}px rgba(255, 255, 255, 0.4)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          fontWeight: 'bold',
          letterSpacing: 2,
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
        }}>
          AGENT
        </div>

        {/* Orbiting Nodes - Layer 1 (Core AI) */}
        {['LangGraph', 'Agentic AI', 'RAG Systems', 'Python'].map((label, i) => {
          const angle = (i * 90 + frame * 0.4) * (Math.PI / 180);
          const radius = 160 + Math.sin(frame / 25 + i) * 15;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          // Gentles pulsing and floating effect
          const pulse = 1 + Math.sin(frame / 15 + i) * 0.05;
          const floatY = Math.sin(frame / 20 + i) * 10;

          return (
            <React.Fragment key={`l1-${i}`}>
              <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <line 
                  x1={centerX} 
                  y1={centerY} 
                  x2={x} 
                  y2={y + floatY} 
                  stroke="rgba(255, 255, 255, 0.15)" 
                  strokeWidth="0.5"
                  strokeDasharray="4,4"
                />
              </svg>
              
              <div 
                className="skill-node-hover"
                style={{
                  position: 'absolute',
                  left: x - 45,
                  top: y - 45 + floatY,
                  width: 90,
                  height: 90,
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 9,
                  textAlign: 'center',
                  padding: '0 5px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(4px)',
                  boxShadow: `0 0 ${10 + Math.sin(frame / 10 + i) * 5}px rgba(255, 255, 255, 0.1)`,
                  transform: `scale(${pulse})`,
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                {label}
              </div>
            </React.Fragment>
          );
        })}

        {/* Orbiting Nodes - Layer 2 (Tools & Frameworks) */}
        {['TensorFlow', 'PyTorch', 'n8n', 'Figma'].map((label, i) => {
          const angle = (i * 90 + 45 - frame * 0.2) * (Math.PI / 180);
          const radius = 280 + Math.cos(frame / 30 + i) * 20;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          const pulse = 1 + Math.cos(frame / 20 + i) * 0.03;

          return (
            <React.Fragment key={`l2-${i}`}>
              <div 
                className="skill-node-hover"
                style={{
                  position: 'absolute',
                  left: x - 35,
                  top: y - 35,
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 8,
                  color: 'rgba(255, 255, 255, 0.6)',
                  background: 'rgba(255, 255, 255, 0.01)',
                  backdropFilter: 'blur(2px)',
                  transform: `scale(${pulse})`,
                  transition: 'transform 0.3s ease, color 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                {label}
              </div>
            </React.Fragment>
          );
        })}

        {/* Floating Code Particles */}
        {Array.from({ length: 10 }).map((_, i) => {
          const t = (frame + i * 50) % 300;
          const particleOpacity = interpolate(t, [0, 50, 250, 300], [0, 1, 1, 0]);
          const particleY = interpolate(t, [0, 300], [height + 50, -50]);
          const particleX = (width / 10) * i + Math.sin(frame / 30 + i) * 30;

          const snippets = ['if (agent.ready)', 'await llm.query()', 'graph.step()', 'RAG.retrieve()'];

          return (
            <div key={i} style={{
              position: 'absolute',
              left: particleX,
              top: particleY,
              opacity: particleOpacity,
              fontSize: 8,
              color: 'rgba(255, 255, 255, 0.3)',
              whiteSpace: 'nowrap',
            }}>
              {snippets[i % snippets.length]}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
