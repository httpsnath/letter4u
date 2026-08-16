import { useEffect, useRef } from "react";

type MusicPlayerProps = {
  play: boolean;
};

export default function MusicPlayer({ play }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.2

    if (play) {
      audioRef.current
        .play()
        .catch((error) => {
          console.log("Music could not autoplay:", error);
        });
    } else {
      audioRef.current.pause();
    }
  }, [play]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      
    >
      <source
        src="/music.mp3"
        type="audio/mpeg"
      />
    </audio>
  );
}