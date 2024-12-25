import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="DeliverEase - Connectez les Restaurants aux Livreurs Indépendants" />
            <div className="min-h-screen bg-white">
                {/* Navigation */}
                <nav className="mx-auto max-w-7xl px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <img src="/images/logo.svg" alt="DeliverEase" className="h-8 w-8" />
                            <span className="text-xl font-semibold text-gray-900">DeliverEase</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="text-gray-900 hover:text-gray-600"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-gray-900 hover:text-gray-600"
                                    >
                                        Connexion
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                                    >
                                        Commencer
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <main>
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Connectez les Restaurants aux Livreurs Indépendants
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                                Optimisez vos opérations de livraison avec notre plateforme intelligente. 
                                Connexion en temps réel entre restaurants et livreurs fiables.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <Link
                                        href={route('restaurant.register')}
                                        className="flex items-center justify-center gap-2 rounded-xl bg-white p-4 text-black leading-6 hover:bg-gray-50"
                                    >
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                                            <path d="M19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M3 7L12 14L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span>Je suis Restaurateur</span>
                                    </Link>
                                    <Link
                                        href={route('delivery.register')}
                                        className="flex items-center justify-center gap-2 rounded-xl bg-white p-4 text-black leading-6 hover:bg-gray-50"
                                    >
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                                            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span>Je suis un Livreur</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="bg-gray-50 py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Pourquoi Choisir DeliverEase ?
                                </h2>
                            </div>
                            <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="bg-white p-8 rounded-xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Mise en relation en temps réel
                                    </h3>
                                    <p className="mt-4 text-gray-600">
                                        Notre algorithme intelligent met en relation les restaurants avec les livreurs disponibles instantanément, 
                                        assurant des livraisons rapides et efficaces.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Prix transparents
                                    </h3>
                                    <p className="mt-4 text-gray-600">
                                        Des tarifs clairs et sans frais cachés. Payez uniquement pour les livraisons réussies.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-xl shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Analyses de performance
                                    </h3>
                                    <p className="mt-4 text-gray-600">
                                        Des analyses détaillées pour optimiser vos opérations de livraison.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
