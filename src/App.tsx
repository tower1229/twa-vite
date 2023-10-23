import demos from "@/lib/demo.ts";
import "./App.css";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { useLocation } from "react-router-dom";

export default function Page() {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <>
      <h1 className="font-medium text-xl mb-4">Examples</h1>

      <div className="space-y-10 text-white">
        {demos.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="font-semibold text-xs tracking-wider text-gray-400 uppercase">
                {section.name}
              </div>

              <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <a
                      href={item.path}
                      key={item.name}
                      className="rounded-lg space-y-1.5 bg-gray-900 py-3 px-5 group block hover:bg-gray-800"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        {item.name}
                      </div>

                      {item.description ? (
                        <div className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                          {item.description}
                        </div>
                      ) : null}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
