import { Container, Text, clx } from "@medusajs/ui";
import { getCategoriesList, getCollectionsList } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";
import Footerlist from "./footerlist";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="justify-between py-8 text-white-0 bg-grey-140 ">
      <div className="container justify-between px-4 mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex w-full justify-left ">
            <div className="w-full mb-6 md:mb-0 md:w-auto" style={{ marginRight: '128px' }}>
              <h4 className="text-2xl ml-92 pt-66">Account</h4>
              <ul>
                <li className=" ml-92 pt-29 text-17px">Log In</li>
                <li className="ml-92 pt-13 text-17px">Sign Up</li>
              </ul>
            </div>
            <div className="w-full mb-6 md:mb-0 md:w-auto txt-compact-xlarge-plus" style={{ marginRight: '113px' }}>
              <h4 className="text-2xl pt-66 ">Company</h4>
              <ul>
                <li className="pt-29 text-17px">About</li>
              </ul>
            </div>
            <div className="w-full mb-6 md:mb-0 md:w-auto" style={{ marginRight: '121px' }}>
              <h4 className="text-2xl pt-66 ">Get Help</h4>
              <ul>
                <li className="pt-29 text-17px">Return Policy</li>
                <li className="pt-13 text-17px">Shipping Info</li>
              </ul>
            </div>
            <div className="w-fullmd:mb-0 md:w-auto" style={{ marginRight: '90px' }}>
              <h4 className="text-2xl pt-66 ">Connect</h4>
              <ul>
                <li className="pt-29 text-17px">Facebook</li>
                <li className="pt-13 text-17px">Instagram</li>
                <li className="pt-13 text-17px">Twitter</li>
              </ul>
            </div>
            <div className="flex items-center w-full md:mb-0 md:w-auto">
              <input
                type="text"
                placeholder="Email Address"
                className="p-2 text-black bg-white outline-none rounded-2 w-388"
              />
              <button className="p-2 text-black bg-white-30 rounded-2 w-52">&rarr;</button>
            </div>
          </div>
        </div>
        <div className="font-semibold text-center text-gray-600 mt-43">
          <ul className="flex justify-center mb-2">
            <li className="mx-2 text-gray_terms">Privacy Policy</li>
            <li className="mx-2 text-gray_terms">Terms of Service</li>
            <li className="mx-2">Vendor Code of Conduct</li>
          </ul>
          <p className=" mt-23">© 2023 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


{/* {product_categories && product_categories?.length > 0 && (
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">
                Categories
              </span>
              <ul
                className="grid grid-cols-1 gap-2"
                data-testid="footer-categories"
              >
                {product_categories?.slice(0, 6).map((c) => {
                  if (c.parent_category) {
                    return;
                  }

                  const children =
                    c.category_children?.map((child) => ({
                      name: child.name,
                      handle: child.handle,
                      id: child.id,
                    })) || null;

                  return (
                    <li
                      className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                      key={c.id}
                    >
                      <LocalizedClientLink
                        className={clx(
                          "hover:text-ui-fg-base",
                          children && "txt-small-plus"
                        )}
                        href={`/categories/${c.handle}`}
                        data-testid="category-link"
                      >
                        {c.name}
                      </LocalizedClientLink>
                      {children && (
                        <ul className="grid grid-cols-1 gap-2 ml-3">
                          {children &&
                            children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  className="hover:text-ui-fg-base"
                                  href={`/categories/${child.handle}`}
                                  data-testid="category-link"
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )} */}
//     {collections && collections.length > 0 && (
//       <div className="flex flex-col gap-y-2">
//         <span className="txt-small-plus txt-ui-fg-base">
//           Collections
//         </span>
//         <ul
//           className={clx(
//             "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
//             {
//               "grid-cols-2": (collections?.length || 0) > 3,
//             }
//           )}
//         >
//           {collections?.slice(0, 6).map((c) => (
//             <li key={c.id}>
//               <LocalizedClientLink
//                 className="hover:text-ui-fg-base"
//                 href={`/collections/${c.handle}`}
//               >
//                 {c.title}
//               </LocalizedClientLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     )}
//     <div className="flex flex-col gap-y-2">
//       <span className="txt-small-plus txt-ui-fg-base">Mercur</span>
//       <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
//         <li>
//           <a
//             href="https://github.com/mercurjs/mercur"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-ui-fg-base"
//           >
//             GitHub
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://mercurjs.com/"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-ui-fg-base"
//           >
//             Documentation
//           </a>
//         </li>
//       </ul>
//     </div>
//     <div className="flex flex-col gap-y-2">
//       <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
//       <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
//         <li>
//           <a
//             href="https://github.com/medusajs"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-ui-fg-base"
//           >
//             GitHub
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://docs.medusajs.com"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-ui-fg-base"
//           >
//             Documentation
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://github.com/medusajs/nextjs-starter-medusa"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-ui-fg-base"
//           >
//             Source code
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>
// <div className="flex justify-between w-full mb-16 text-ui-fg-muted">
//   <Text className="txt-compact-small">
//     © {new Date().getFullYear()} Medusa Store. All rights reserved.
//   </Text>
//   <MedusaCTA /> 