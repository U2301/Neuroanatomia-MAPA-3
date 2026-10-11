import React from 'react';
import { X, BookOpen, Pin } from 'lucide-react';

interface ExamGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExamGuideModal: React.FC<ExamGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs flex items-center justify-center p-4 font-sans"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full border border-[#d4cbc2] p-6 shadow-2xl relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-[#787169] hover:text-[#231f1c] text-base p-1 transition cursor-pointer"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#2b553c] text-xs font-bold uppercase tracking-wider mb-1">
          <BookOpen className="w-3.5 h-3.5 text-[#2b553c]" />
          <span>Apuntes de Clase • Guía Concentrada</span>
        </div>

        <h3 className="text-xl font-bold text-[#292420] mb-4">
          Resumen Rápido: Desarrollo del Sistema Nervioso (SN)
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#231f1c] leading-relaxed">
          {/* Ejes principales y Nota de Reinos */}
          <div className="p-3.5 bg-[#fef7e6] rounded-xl border border-amber-300">
            <p className="font-bold text-amber-950 mb-1">
              Desarrollo del SN y Nota Clave de Reinos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-2">
              <div className="bg-white p-2 rounded-lg border border-amber-200">
                <span className="font-bold text-[#205b76] block">Ontogenético:</span>
                <span>Comparar y estudiar <strong>dentro de la misma especie</strong>.</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-amber-200">
                <span className="font-bold text-[#2b553c] block">Filogenético:</span>
                <span>Estudiar y comparar el SN <strong>con otras especies</strong>.</span>
              </div>
            </div>
            <div className="bg-white p-2 rounded-lg border border-amber-200 text-xs mb-2">
              <strong>Especie:</strong> Un grupo de organismos que está aislado (desde el punto de vista reproductivo) de otros organismos. Los miembros de una especie no pueden generar descendencia fértil con los de otra especie. Se considera que la vida se originó en el agua en organismos unicelulares.
            </div>
            <div className="p-2 bg-amber-100/80 rounded-lg border border-amber-300 text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <Pin className="w-3.5 h-3.5 text-amber-800 shrink-0" />
              <span>[!tip] Solo el reino animalia tiene sistema nervioso, plantae y fungi tiene terminaciones sensoriales descentralizada.</span>
            </div>
          </div>

          {/* Desarrollo Filogenético y Encefalización */}
          <div className="p-3.5 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#292420] mb-2">
              Desarrollo Filogenético, Áreas Terciarias y Encefalización:
            </p>
            <div className="space-y-1 text-xs text-[#49423c]">
              <p>• Implica organización de las neuronas en grupos inicialmente en <strong>ganglios con control segmental pero sin integrador central</strong>.</p>
              <p>• Se forma una <strong>agrupación integradora central</strong>.</p>
              <p>• Se desarrollan las <strong>estructuras básicas del cerebro</strong>.</p>
              <p>• Se agregan estructuras paulatinamente hasta desarrollar el <strong>prosencéfalo</strong>.</p>
              <p>• La adquisición de las <strong>áreas terciarias</strong> es la ganancia en el ser humano, tanto la <strong>PTO [Parieto-Tempo-Occipital]</strong> como las <strong>prefrontales</strong>. Estas últimas abarcan <strong>1/4 del total del cerebro</strong>.</p>
              <p>• <strong>Encefalización:</strong> procesos de incorporar nuevos sistemas y dar más peso al encéfalo como organismo centralizado.</p>
            </div>
          </div>

          {/* Escala Animal y Teoría de los 3 Cerebros de MacLean */}
          <div className="p-3.5 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#704812] mb-1.5">
              Escala Evolutiva Animal y Teoría de los 3 Cerebros según MacLean:
            </p>
            <div className="space-y-1 text-xs text-[#49423c] mb-2.5">
              <p>• Existen animales <strong>bi-cordados</strong> con una doble línea nerviosa que evolucionaron en animales <strong>cordados</strong> con una única línea nerviosa.</p>
              <p>• Se agrupan las neuronas a lo largo de la médula espinal y se denominan <strong>seres cordados</strong>.</p>
              <p>• Ahora hay un esqueleto que rodea y protege la médula espinal y se denominan: <strong>Vertebrados</strong>.</p>
              <p>• Los primeros vertebrados son los <strong>peces óseos</strong> y al salir del agua se les denomina: <strong>Anfibio</strong>.</p>
              <p>• Cuando se independizan del agua ahora son <strong>reptiles</strong>.</p>
              <p>• Cuando dejan de poner huevos y las hembras empiezan a amamantar a sus crías se convierten en <strong>Mamíferos</strong>, además desarrollan <strong>sistema límbico complejo</strong>.</p>
              <p>• Dentro de ellos se encuentran los <strong>primates</strong> (el tamaño del cerebro no explica por sí solo la evolución) y nosotros somos una familia de dicha orden: los <strong>homínidos</strong> (<strong>primates sin cola</strong>, con <strong>visión estereoscópica y tricrómica</strong>).</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2 bg-white rounded border border-[#d4cbc2]"><strong>1. Reptiliano:</strong> Impulsivo</div>
              <div className="p-2 bg-white rounded border border-[#d4cbc2]"><strong>2. Paleo-Mamífero:</strong> Afectivo</div>
              <div className="p-2 bg-white rounded border border-[#d4cbc2]"><strong>3. Neo-mamífero:</strong> Racional</div>
            </div>
          </div>

          {/* Proceso de Hominización, Tamaños y Presiones Selectivas */}
          <div className="p-3.5 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#2b553c] mb-1">
              Proceso de Hominización, Tamaños y Presiones Selectivas:
            </p>
            <p className="text-xs text-[#49423c] mb-2">
              Sigue el mismo principio (selección natural): es el proceso mediante el cual se han desarrollado las características homo para llegar al ser actual:
            </p>
            <div className="p-2 bg-[#f4efe9] rounded-lg border border-[#d4cbc2] text-xs font-semibold text-[#292420] mb-2">
              Ancestro común → Australopitecos (cerebro 400cm²) → Homo habilis (cerebro 600-700cm²) → Homo Erectus (cerebro 800-1000cm²) → Homo neanderthal (cerebro 1500cm²) → Homo sapiens (cerebro 1500 cm²)
            </div>
            <p className="text-xs text-[#49423c] mb-2">
              • <strong>Tamaños y diferencias:</strong> El tamaño del cerebro no diferencia la inteligencia; la diferencia la crean las <strong>conexiones y la velocidad de procesamiento</strong>.
            </p>
            <p className="text-xs text-[#49423c]">
              • <strong>5 Presiones selectivas en Homínidos:</strong> 1) Locomoción de manera bípeda eficiente y versátil, 2) Incorporación de la carne a la dieta, 3) Industria lítica, 4) Uso del fuego, 5) Lenguaje.
            </p>
          </div>

          {/* El Origen de las Especies y Darwin */}
          <div className="p-3.5 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#944920] mb-1.5">
              El Origen de las Especies y Teoría de la Evolución de Charles Darwin en el Desarrollo Filogenético:
            </p>
            <div className="space-y-1 text-xs text-[#49423c]">
              <p>• <strong>El origen de las especies:</strong> Las características actuales han sido la selección de entre otras características por ser las más adaptativas (<strong>Selección natural</strong>).</p>
              <p>• 1. La evolución se ve afectada de manera genética.</p>
              <p>• 2. Los genes de cada individuo existen por herencia.</p>
              <p>• 3. El desarrollo del SN de cada individuo depende de sus interacciones con el ambiente.</p>
              <p>• 4. La capacidad del comportamiento presente de cada individuo depende de sus patrones de actividad nerviosa exclusivos, algunos de los cuales se experimentan como pensamientos, emociones, sentimientos, etc.</p>
              <p>• 5. El comportamiento presente de cada individuo surge de la interacción entre los patrones de actividad nerviosa y su percepción.</p>
              <p>• 6. El éxito del comportamiento presente de cada individuo influye sobre la posibilidad de que sus genes pasen o no a las generaciones futuras.</p>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-[#d4cbc2]/40 flex justify-end">
          <button 
            className="px-4 py-1.5 bg-[#2b553c] text-white rounded-lg text-xs font-semibold hover:bg-[#436d53] transition cursor-pointer"
            onClick={onClose}
          >
            Cerrar Guía
          </button>
        </div>
      </div>
    </div>
  );
};
