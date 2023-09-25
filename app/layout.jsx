import Nav from "@components/Nav"
import Provider from "@components/Provider"
import "@styles/globals.css"
import logo from "public/assets/images/logo.svg"

export const metadata = {
    title: "Proomptr",
    description: "Discover and share AI prompts",
    icons: [{ rel: 'icon', url: logo.src }],
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>

                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout