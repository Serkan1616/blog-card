import "./App.css";
import illustration_article from "./assets/illustration-article.svg";
import avatar from "./assets/image-avatar.webp";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen  bg-[hsl(47,88%,63%)] font-figt">
      <div className="flex flex-col w-[320px] h-auto gap-2 p-4 bg-[hsl(0,0%,100%)] rounded-2xl border border-t border-l border-[hsl(0,0%,7%)] border-b-8 border-r-8 border-b-[hsl(0,0%,7%)] border-r-[hsl(0,0%,7%)]">
        <img className="rounded-xl" src={illustration_article} alt="" />
        <span className="inline-flex bg-[hsl(47,88%,63%)] w-fit px-2 py-1 mt-3 rounded-sm font-bold text-sm">
          Learning
        </span>
        <span className="text-sm">Published 21 Dec 2023</span>
        <h1 className="text-[hsl(0,0%,7%)] font-extrabold text-left text-lg">
          HTML & CSS foundations
        </h1>
        <p className="text-[hsl(0,0%,42%)] text-sm text-left">
          {" "}
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex items-center mt-4 gap-2">
          <img className="w-8 h-8" src={avatar} alt="" />
          <span className="font-bold text-sm">Greg Hooper</span>
        </div>
      </div>
    </div>
  );
}

export default App;
