import { useEffect } from "react";

export default function Cineboxd(){
    useEffect(() => {
        const originalTitle = document.title;
        document.title = "Cineboxd";

        const favicon = document.querySelector("link[rel=icon]");
        
        const OriginalFavIcon = favicon.href;
        favicon.href = "/popcorn.png"

        return () => {
          document.title = originalTitle;
          favicon.href = OriginalFavIcon;
        };
    }, []);
    
    return (
      <div>
        <iframe
          src="https://cineboxd.vishnuuuvrdn.workers.dev"
          title="cineboxd"
          style={{ width: "100%", height: "100vh", border: 'none'}}
        />
      </div>
    );
};