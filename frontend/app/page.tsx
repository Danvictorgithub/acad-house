import { randomUUID } from "crypto";
import Header from "./components/Header";
export default function Home() {
  return (
    <main className="">
      <Header />

      <div className=" container mx-auto px-16 py-12 flex flex-col h-full rounded-full">
        <div className="flex gap-4 pb-4 overflow-auto whitespace-nowrap snap-mandatory no-scrollbar">
          {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map(
            () => {
              return (
                <div
                  className="flex flex-col justify-center items-center snap-start"
                  key={randomUUID()}
                >
                  <span className="material-symbols-outlined">
                    night_shelter
                  </span>
                  <p>Boarding House</p>
                </div>
              );
            }
          )}
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
          {[1, 2, 3, 1, 1, 1, 1, 1, 1, 1].map(() => {
            return (
              <div className="w-[275px] h-[360px]" key={randomUUID()}>
                <img
                  src="bhouse.jpg"
                  alt=""
                  className="h-[260px] object-cover rounded-lg"
                />
                <div className="flex items-center justify-between py-2">
                  <h2 className="font-medium">Jukcatts Boarding House</h2>
                  <p className="flex items-center">
                    <span className="material-symbols-outlined">star</span>
                    <span className="ml-1">5.00</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
