import { useEffect, useRef } from "react";

const MusicPlayer = ({ isPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      src="/music.mp3"
      loop
    />
  );
};

export default MusicPlayer;