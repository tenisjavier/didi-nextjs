import { cookies } from "next/headers";

// //* EXPERIMENT A/B
// export const initABVersion = (name: string) => {
//   "use client";
//   const isBrowser = typeof window !== "undefined";

//   if (isBrowser) {
//     //? if was in a past experiment delete ls
//     if (window.localStorage.getItem("test_version"))
//       window.localStorage.removeItem("test_version");
//     if (window.localStorage.getItem("t1")) window.localStorage.removeItem("t1");
//     if (window.localStorage.getItem("t2")) window.localStorage.removeItem("t2");
//     if (window.localStorage.getItem("t3")) window.localStorage.removeItem("t3");
//     if (window.localStorage.getItem("t4")) window.localStorage.removeItem("t4");
//     if (window.localStorage.getItem("t5")) window.localStorage.removeItem("t5");
//     if (window.localStorage.getItem("t6")) window.localStorage.removeItem("t6");
//     if (window.localStorage.getItem("t7")) window.localStorage.removeItem("t7");

//     const test_version = window.localStorage.getItem(name);
//     //? if is a new user with no ls
//     if (!test_version) {
//       let group = Math.random();
//       //window.localStorage.setItem();

//       //? Im in B version
//       if (group < 0.5) {
//         window.localStorage.setItem(name, "b");
//         // gtmEvent(`ab-landing`, {
//         //   version: "b",
//         //   versionName: name + "-b",
//         // });
//         return "b";
//       } else {
//         window.localStorage.setItem(name, "a");
//         // gtmEvent(`ab-landing`, {
//         //   version: "a",
//         //   versionName: name + "-a",
//         // });
//         return "a";
//       }
//     }
//     if (test_version) {
//       //? if is a old user and B version
//       if (test_version === "b") {
//         // gtmEvent(`ab-landing`, {
//         //   version: "b",
//         //   versionName: name + "-b",
//         // });
//         return "b";
//       }
//       if (test_version === "a") {
//         // gtmEvent(`ab-landing`, {
//         //   version: "a",
//         //   versionName: name + "-a",
//         // });
//         return "a";
//       }
//     }
//   }

//   return "a";
// };

//? function that returns the correct pathname page to render on page
export const ABinit = (abtest: any) => {
  const version = cookies().get("abVersion")?.value;
  if (version === "a") return abtest.pagesCollection?.items[0]?.pathname;
  if (version === "b") return abtest.pagesCollection?.items[1]?.pathname;
  return null;
};
