import { Player } from '@remotion/player';
import { AIComposition } from './AIComposition';

export const RemotionPlayer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Player
        component={AIComposition}
        durationInFrames={300}
        compositionWidth={800}
        compositionHeight={600}
        fps={30}
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
        controls={false}
        autoPlay
        loop
      />
    </div>
  );
};
