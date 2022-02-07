import { useEffect, useState } from "react";

const ProgressBar = ({ completed, songDuration, playNextSong }) => {
  const [progress, setProgress] = useState(0);

  const fillerStyles = {
    width: `${progress}%`,
  };

  useEffect(() => {
    setProgress((completed / songDuration) * 100);
    if (completed > 0 > songDuration) {
      playNextSong();
    }
  }, [completed]);

  return (
    <div className={"progress-bar"}>
      <div className={"progress-bar__filler"} style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
