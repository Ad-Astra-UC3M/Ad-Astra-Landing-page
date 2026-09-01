import calendar from "../../assets/bootcamp/calendar.png";
import calendar2 from "../../assets/bootcamp/calendar2.png";
import calendar3 from "../../assets/bootcamp/calendar3.png";
import { RocketIcon } from "lucide-react";

//text-[#2c2fa2]
//text-[#2f3367]

export default function BootcampPage() {
  return (		
    <section
			id="about"
			className="relative overflow-x-clip bg-brand-surface px-6 py-40 sm:px-8 md:py-40 lg:py-55"
			aria-labelledby="about-us-title"
		>
      <div className="mx-auto order-1 max-w-5xl lg:order-2 text-center">
				<p className="text-3xl mx-auto text-center font-astra-display uppercase tracking-[0.16em] text-brand-ink/95">
						Unéte a nuestra comunidad de Whatsapp para no perderte nada y guarda las fechas más importantes.
					</p>
            <div
                className="absolute rounded-full border-2 border-brand-accent/70 top-1/5 left-1/6 aspect-square w-[120%] -rotate-64 pointer-events-none motion-reduce:animate-none animate-[astra-footer-orbit_128s_linear_infinite] z-10"
                aria-hidden="true"
              >
                <RocketIcon
                  className="absolute left-1/2 top-0 size-5 -translate-1/2 rotate-45"
                  aria-hidden="true"
                />
              </div>
            <div className="flex items-center justify-center gap-6 mt-8">
                        <a
                            //href="https://chat.whatsapp.com/tu-enlace-de-invitacion"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Únete a nuestro WhatsApp"
                        >
                            <svg viewBox="0 0 24 24" className="w-20 h-20 fill-[#25D366]">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12.004 2C6.486 2 2.01 6.476 2.01 11.994c0 2.114.68 4.070 1.836 5.664L2.5 22l4.462-1.316a9.94 9.94 0 0 0 5.042 1.36c5.518 0 9.994-4.476 9.994-9.994C21.998 6.476 17.522 2 12.004 2zm0 18.14a8.13 8.13 0 0 1-4.146-1.135l-.297-.176-3.09.911.925-3.008-.193-.31a8.12 8.12 0 0 1-1.246-4.428c0-4.49 3.656-8.146 8.147-8.146 4.49 0 8.147 3.656 8.147 8.146 0 4.49-3.657 8.146-8.147 8.146z" />
                            </svg>
                        </a>
                        <img src={calendar3} alt="Calendario" className="w-20 h-20" />
              
{/*                    <button
                                //onClick={downloadICS}
                                aria-label="Guardar fecha en el calendario"
                                className="cursor-pointer"
                            >
                                <img
                                    src={calendarIcon}
                                    alt="Guardar en el calendario"
                                    className="w-10 h-10"
                                />
                            </button>
*/}            </div>    
            </div>
    </section>
  );
}
