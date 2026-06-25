import { useEffect } from "react";

export default function FormEZ(){
    useEffect(() => {
        const originalTitle = document.title;
        document.title = "FormEZ";

        const favicon = document.querySelector("link[rel=icon]");
        
        const OriginalFavIcon = favicon.href;
        favicon.href = "/document.png"

        return () => {
          document.title = originalTitle;
          favicon.href = OriginalFavIcon;
        };
    }, []);
    
    return (
      <div>
        <iframe
          src="https://formez.pages.dev"
          title="FormEZ"
          style={{ width: "100%", height: "100vh", border: "none" }}
        />
      </div>
    );
};