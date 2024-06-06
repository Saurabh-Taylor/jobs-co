import { currentUser } from '@clerk/nextjs/server';
import Header from "../header"



export default async function CommonLayout({children}) {

    const user = await currentUser()
    return (
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
            {/* {Header component} */}
            <Header user={JSON.parse(JSON.stringify(user))} />
            {/* Header Component */}

            {/* Main Component */}
            <main>{children}</main>

        </div>
    )
}