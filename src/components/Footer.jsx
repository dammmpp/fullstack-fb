import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// Los imports de Leaflet y la configuración del icono van AFUERA
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
})
L.Marker.prototype.options.icon = DefaultIcon

function Footer() {
    const posicionUTN = [-34.6865, -58.4658]

    return (
        <footer className='flex flex-col gap-6 p-6 bg-white border-t border-zinc-200'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                <p className='text-sm text-zinc-500 font-normal'>
                    © 2026 Plataforma de Gestión
                </p>

                <nav>
                    <ul className='flex gap-6 text-xs uppercase tracking-wider text-zinc-600'>
                        <li>
                            <a href="https://instagram.com/damiannale" target="_blank" rel="noreferrer" className='hover:text-zinc-900 transition-colors'>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/aledamidam" target="_blank" rel="noreferrer" className='hover:text-zinc-900 transition-colors'>
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/dammmpp" target="_blank" rel="noreferrer" className='hover:text-zinc-900 transition-colors'>
                                GitHub
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mapa reducido para que no rompa el diseño del footer */}
            <div className='w-full h-48 rounded-md overflow-hidden border border-zinc-200 shadow-sm'>
                <MapContainer
                    center={posicionUTN}
                    zoom={15}
                    scrollWheelZoom={false}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; OpenStreetMap'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={posicionUTN}>
                        <Popup>
                            UTN - Sede Lugano
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </footer>
    )
}

export default Footer