import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Root({ children }) {
    return (
        <div className="w- px-4 sm:px-6 md:px-8">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}