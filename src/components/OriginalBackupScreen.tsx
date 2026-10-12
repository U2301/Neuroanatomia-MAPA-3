import React, { useEffect } from 'react';
import { ArrowLeft, Pin, Bookmark, CheckCircle2, HelpCircle, Target } from 'lucide-react';

interface OriginalBackupScreenProps {
  onNavigateToAtlas: () => void;
}

export const OriginalBackupScreen: React.FC<OriginalBackupScreenProps> = ({ onNavigateToAtlas }) => {
  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('#back-to-atlas-btn')) {
        return;
      }
    };
    document.body.addEventListener('click', handleBodyClick);
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [onNavigateToAtlas]);

  return (
    <div
      id="original-backup-screen"
      data-xpath="//body"
      onClick={onNavigateToAtlas}
      className="min-h-screen w-full bg-[#fcfbf9] text-[#231f1c] p-6 sm:p-10 select-none cursor-pointer relative font-sans"
      title="Haz clic en cualquier parte de la pantalla para volver al Atlas de Desarrollo del SN"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#d4cbc2] p-8 sm:p-12 shadow-parchment relative">
        {/* Washi tape header */}
        <div className="washi-tape px-4 py-1.5 rounded text-xs font-serif font-bold text-[#704812] inline-block mb-6 shadow-xs">
          📓 Transcripción Literal de Apuntes de Clase (Método Cornell • #notas-clase)
        </div>

        {/* Frontmatter YAML Box */}
        <div className="bg-[#f5efe9] p-4 rounded-xl border border-[#d4cbc2] mb-6 font-mono text-xs text-[#5a524a]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div><span className="text-[#8c5e3c] font-bold">fecha:</span> —</div>
            <div><span className="text-[#8c5e3c] font-bold">hora:</span> —</div>
            <div><span className="text-[#8c5e3c] font-bold">materia:</span> Neuroanatomía</div>
            <div><span className="text-[#8c5e3c] font-bold">profesor:</span> —</div>
            <div><span className="text-[#8c5e3c] font-bold">tipo:</span> clase</div>
            <div><span className="text-[#8c5e3c] font-bold">unidad:</span> —</div>
            <div><span className="text-[#8c5e3c] font-bold">estado:</span> 🟢 Completo</div>
            <div><span className="text-[#8c5e3c] font-bold">tags:</span> #notas-clase</div>
          </div>
        </div>

        {/* Objetivos de la Clase */}
        <div className="mb-6 p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2]/70 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-[#292420] text-sm mb-2">
            <Target className="w-4 h-4 text-[#2b553c]" />
            <span>🎯 Objetivos de la Clase</span>
          </div>
          <p className="text-[#787169] italic">- [ ] Comprender el desarrollo filogenético y ontogenético del Sistema Nervioso, la encefalización, los 3 cerebros de MacLean, el proceso de hominización y la teoría de Darwin.</p>
        </div>

        <div className="border-b border-[#d4cbc2] pb-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#292420]">
            📝 Apuntes / Notas Principales
          </h1>
          <p className="text-sm font-bold text-[#2b553c] mt-1 font-sans">
            1. # Desarrollo del SN
          </p>
        </div>

        {/* Raw Text Content - 100% literal */}
        <div className="space-y-6 text-xs sm:text-sm text-[#38332e] leading-relaxed font-sans">
          {/* Ontogenético y Filogenético */}
          <section className="bg-[#fbf8f5] p-5 rounded-xl border border-[#d4cbc2]/70 space-y-3">
            <h2 className="text-base font-bold text-[#205b76] font-serif">
              • ## Ontogenético Comparar y estudiar dentro de la misma especie
            </h2>
            <h2 className="text-base font-bold text-[#2b553c] font-serif">
              • ## Filogenético: Estudiar y Comparar el SN con otras especies
            </h2>
            <ul className="pl-5 space-y-1.5 list-disc text-[#49423c]">
              <li>
                <strong>#### Especie:</strong> Un grupo de organismos que está aislado (desde el punto de vista reproductivo) de otros organismos. Los miembros de una especie no pueden generar descendencia fértil con los de otra especie
              </li>
              <li>
                <strong>#### Se considera que la vida se originó en el agua en organismo unicelulares</strong>
              </li>
            </ul>
          </section>

          {/* Desarrollo Filogenético */}
          <section className="bg-[#fbf8f5] p-5 rounded-xl border border-[#d4cbc2]/70">
            <h2 className="text-base font-bold text-[#2b553c] mb-2 font-serif">
              ### Desarrollo Filogenético
            </h2>
            <ul className="pl-5 space-y-1.5 list-disc text-[#49423c]">
              <li>#### Implica organización de las neuronas en grupos inicialmente en ganglios con control segmental pero sin integrador central</li>
              <li>#### Se forma una agrupación integradora central</li>
              <li>#### Se desarrollan las estructuras básicas del cerebro</li>
              <li>#### Se agregan estructuras paulatinamente hasta desarrollar el prosencéfalo</li>
              <li>#### La adquisición de las áreas terciarias es la ganancia en el ser humano, tanto la PTO [Parieto-Tempo-Occipital] como las prefrontales. Estas últimas abarcan 1/4 del total del cerebro</li>
              <li>#### Existen animales bi-cordados con una doble línea nerviosa que evolucionaron en animales cordados con una única línea nerviosa</li>
              <li>#### Se agrupan las neuronas a lo largo de la médula espinal y se denominan seres cordados</li>
              <li>#### Ahora hay un esqueleto que rodea y protege la medula espinal y se denominan: Vertebrados</li>
              <li>#### Los primeros vertebrados son los peces óseos y al salir de agua se le denominan: Anfibio</li>
              <li>#### Cuando se independizan del agua ahora son reptiles</li>
              <li>#### Cuando dejan de poner huevos y las hembras empiezan a amamantar a sus crías se convierten en Mamíferos, además desarrollan sistema límbico complejo</li>
              <li>#### Dentro de ellos se encuentran los primates y nosotros somos una familia de dicha orden: los homínidos</li>
              <li>#### Primates sin cola</li>
              <li>#### Vision estereoscopica y tricomica</li>
            </ul>
          </section>

          {/* MacLean, Primates, Origen de las Especies y Hominización */}
          <section className="bg-[#fbf8f5] p-5 rounded-xl border border-[#d4cbc2]/70 space-y-4">
            <div>
              <h2 className="text-base font-bold text-[#944920] mb-1 font-serif">
                ## Teoria de los 3 tipos de cerebros según Mac Lean
              </h2>
              <ul className="pl-5 space-y-1 list-disc text-[#49423c]">
                <li>#### <strong>Reptiliano:</strong> Impulsivo</li>
                <li>#### <strong>Paleo-Mamífero:</strong> Afectivo</li>
                <li>#### <strong>Neo-mamífero:</strong> Racional</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#292420]">### Evolución del cerebro en los primates</h3>
              <ul className="pl-5 list-disc text-[#49423c]">
                <li>#### El tamaño del cerebro no explica por si solo la evolución</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#292420]">### El origen de las especies</h3>
              <ul className="pl-5 space-y-1 list-disc text-[#49423c]">
                <li>#### Las características actuales han sido la selección de entre otras características por ser las mas adaptativa</li>
                <li>#### Selección natural</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#292420]">### Proceso de hominización</h3>
              <ul className="pl-5 space-y-1 list-disc text-[#49423c]">
                <li>#### Sigue el mismo principio, es el procesos mediante el cual se han desarrollado las características homo para llegar al ser actual</li>
                <li>
                  #### <strong>Ancestro común -&gt; Australopitecos cerebro 400cm^2 -&gt; Homo habilis cerebero 600-700cm^2 -&gt; Homo Erectus cerebro 800-1000cm^2 -&gt; Homo neanderthal cerebro 1500^2 -&gt; Homo sapiens cerebro 1500 cm^2</strong>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#292420]">### Tamaños y diferencias de cerebros:</h3>
              <ul className="pl-5 space-y-1 list-disc text-[#49423c]">
                <li>#### El tamaño del cerebro no diferencia la inteligencia</li>
                <li>#### La diferencia la crean las conexiones y la velocidad de procesamiento</li>
                <li>
                  #### <strong>Presiones selectivas en la evolución del SN en Hominidos</strong>
                  <ul className="pl-5 mt-1 space-y-1 list-circle">
                    <li>#### Locomoción de manera bipeda eficiente y versatil</li>
                    <li>#### Incorporación de la caene a la dieta</li>
                    <li>#### Industria litica</li>
                    <li>#### Uso del fuego</li>
                    <li>#### Lenguaje</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#292420]">
                ### Encefalizació: procesos de incorporar nuevos sistemas y dar mas peso al encefalo como organismo centralizado
              </h3>
            </div>
          </section>

          {/* Darwin y Tip Final */}
          <section className="bg-[#fbf8f5] p-5 rounded-xl border border-[#d4cbc2]/70 space-y-4">
            <div>
              <h2 className="text-base font-bold text-[#205b76] mb-1 font-serif">
                ### Teoria de la evolución de charles darwin en el desarrollo filogenetico
              </h2>
              <ul className="pl-5 space-y-1.5 list-disc text-[#49423c]">
                <li>#### La evolución se ve afectada de manera genetica</li>
                <li>#### Los genes de cada individuo existen por herencia</li>
                <li>#### El desarrollo del SN de cada individuo depende de sus interacciones con el ambiente</li>
                <li>#### la capacidad del comportamiento presente de cada individuo depende de sus patrones de actividad nerviosa exclusivos, algunos de los cuales se experimentan como pensamientos, emociones, sentimientos, etc</li>
                <li>#### El comportamiento presente depende de cada individuó surge de la interacción entre los patrones de actividad nerviosa y su percepción</li>
                <li>#### el éxito del comportamiento presente de cada individuo influye sobre la posibilidad de que sus genes pasen o no a las generaciones futuras</li>
              </ul>
            </div>

            <div className="p-4 bg-[#fef7e6] border-2 border-amber-300 rounded-xl text-amber-950 font-bold flex items-center gap-2">
              <Pin className="w-4 h-4 text-amber-800 shrink-0" />
              <span>&gt; [!tip] **Solo el reino animalia tiene sistema nervioso, plantae y fungi tiene terminaciones sensoriales descentralizada**</span>
            </div>
          </section>

          {/* Cornell Method: Secciones de Cierre del Apunte */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#d4cbc2]">
            {/* Conceptos Clave */}
            <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]/70">
              <div className="flex items-center gap-1.5 font-bold text-[#292420] text-xs mb-2">
                <Bookmark className="w-3.5 h-3.5 text-[#2b553c]" />
                <span>💡 Conceptos Clave & Definiciones</span>
              </div>
              <ul className="text-xs text-[#49423c] space-y-1">
                <li>• <strong>Especie:</strong> Grupo aislado reproductivamente sin descendencia fértil con otras especies.</li>
                <li>• <strong>Encefalización:</strong> Dar mayor peso al encéfalo como organismo centralizado.</li>
                <li>• <strong>Áreas terciarias:</strong> PTO y prefrontales (1/4 del cerebro), máxima ganancia humana.</li>
              </ul>
            </div>

            {/* Preguntas para revisar */}
            <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]/70">
              <div className="flex items-center gap-1.5 font-bold text-[#292420] text-xs mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#8c5e3c]" />
                <span>❓ Preguntas / Dudas para Revisar</span>
              </div>
              <ul className="text-xs text-[#49423c] space-y-1">
                <li>- [ ] ¿Cómo interactúan los patrones de actividad nerviosa con la percepción según Darwin?</li>
                <li>- [ ] ¿Qué presiones selectivas impulsaron la industria lítica y el lenguaje?</li>
              </ul>
            </div>

            {/* Resumen Método Cornell */}
            <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]/70">
              <div className="flex items-center gap-1.5 font-bold text-[#292420] text-xs mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#205b76]" />
                <span>📌 Resumen de 3 Oraciones (Método Cornell)</span>
              </div>
              <ol className="text-xs text-[#49423c] space-y-1 list-decimal pl-4">
                <li>El desarrollo filogenético describe la transición desde ganglios segmentales hasta el prosencéfalo y áreas terciarias (PTO y prefrontales = 1/4).</li>
                <li>La hominización progresa de Australopitecos (400 cm²) a Homo sapiens (1500 cm²), donde la inteligencia depende de conexiones y velocidad, no del tamaño.</li>
                <li>Darwin articula la evolución del SN mediante genética, herencia, ambiente y patrones nerviosos exclusivos cuyo éxito define el traspaso de genes.</li>
              </ol>
            </div>

            {/* Tareas y Próximos Pasos */}
            <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]/70">
              <div className="flex items-center gap-1.5 font-bold text-[#292420] text-xs mb-2">
                <Target className="w-3.5 h-3.5 text-[#944920]" />
                <span>🚀 Tareas y Próximos Pasos</span>
              </div>
              <ul className="text-xs text-[#49423c] space-y-1">
                <li>- [x] Revisar apunte y sintetizar en mapa conceptual interactivo y tarjetas.</li>
                <li>- [x] Repasar las 5 presiones selectivas y los 3 cerebros de MacLean.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Helper Banner */}
        <div 
          id="back-to-atlas-btn"
          className="fixed bottom-6 right-6 bg-[#2b553c] text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 text-xs font-sans border border-[#436d53] transition-transform hover:scale-105 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onNavigateToAtlas();
          }}
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-white">Volver al Mapa Interactivo</p>
            <p className="text-[11px] text-white/80">Clic en cualquier parte de la pantalla para regresar</p>
          </div>
        </div>
      </div>
    </div>
  );
};
