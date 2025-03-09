export default function NotFound() {
    return (
        <div className="container flex items-center justify-center mx-auto p-4 text-center h-screen">
            <div>
                <h1 className="text-4xl font-bold mb-4">404 – Not found</h1>
                <p className="mb-4">We're sorry but we can't find this website.</p>
                <a href="/" className="text-sky-800 underline">Back to the main page</a>
            </div>
        </div>
    );
}
