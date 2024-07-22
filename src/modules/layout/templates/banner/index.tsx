import { Text, clx } from "@medusajs/ui";

import { getCategoriesList, getCollectionsList } from "@lib/data";

import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";

export default async function Banner() {

    return (
        <div className="w-full bg-black h-30">
            <div style={{ textAlign: 'center' }}>
                <p className="text-white-0 text-16">
                    Get early access on launches and offers. <span className="underline">Sign Up For Texts</span>
                </p>
            </div>
        </div>

    );
}


