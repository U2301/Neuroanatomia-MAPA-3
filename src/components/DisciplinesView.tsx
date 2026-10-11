import React, { useState } from 'react';
import {
  Activity,
  Brain,
  Sparkles,
  Eye,
  Flame,
  Network,
  Info,
  ChevronRight,
  Pin,
  Dna,
  Compass,
  Layers
} from 'lucide-react';
import {
  hominidStagesList,
  macLeanBrainsList,
  selectivePressuresList,
  darwinPostulatesList
} from '../data/neuroData';
import { HominidStageItem } from '../types';

export const DisciplinesView: React.FC = () => {
  const [hominidFilter, setHominidFilter] = useState<'Todos' | 'Ancestro' | 'Australopiteco' | 'Género Homo'>('Todos');
  const [selectedStage, setSelectedStage] = useState<HominidStageItem>(hominidStagesList[1]);
  const [activeSubTab, setActiveSubTab] = useState<'organizacion' | 'filogenia' | 'hominizacion' | 'darwin'>('organizacion');

  const filteredStages = hominidStagesList.filter(s => {
    if (hominidFilter === 'Todos') return true;
    return s.type === hominidFilter;
  });

  return (
    <section id="view-disciplines" className="block space-y-8 font-sans">
      {/* 1. Header and Quick Navigation Sub-Tabs */}
      <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#2b553c]/10 text-[#2b553c]">
              <Network className="w-3 h-3 text-[#2b553c]" />
              <span>Apuntes Oficiales de Clase</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#292420]">
              Desarrollo del Sistema Nervioso (SN)
            </h2>
            <p className="text-xs sm:text-sm text-[#787169]">
              Ontogenético y Filogenético • Escala Evolutiva • Teoría de MacLean • Hominización y Darwin
            </p>
          </div>

          {/* Quick Subtab Selector */}
          <div className="flex items-center gap-1.5 bg-[#f5efe9] p-1.5 rounded-xl border border-[#d4cbc2]/70 flex-wrap">
            <button
              onClick={() => setActiveSubTab('organizacion')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeSubTab === 'organizacion'
                  ? 'bg-[#2b553c] text-white shadow-xs'
                  : 'text-[#49423c] hover:text-[#231f1c] hover:bg-white/60'
              }`}
            >
              Bases, Reinos & Encefalización
            </button>
            <button
              onClick={() => setActiveSubTab('filogenia')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeSubTab === 'filogenia'
                  ? 'bg-[#2b553c] text-white shadow-xs'
                  : 'text-[#49423c] hover:text-[#231f1c] hover:bg-white/60'
              }`}
            >
              Escala Filogenética & MacLean
            </button>
            <button
              onClick={() => setActiveSubTab('hominizacion')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeSubTab === 'hominizacion'
                  ? 'bg-[#2b553c] text-white shadow-xs'
                  : 'text-[#49423c] hover:text-[#231f1c] hover:bg-white/60'
              }`}
            >
              Hominización & 5 Presiones
            </button>
            <button
              onClick={() => setActiveSubTab('darwin')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                activeSubTab === 'darwin'
                  ? 'bg-[#2b553c] text-white shadow-xs'
                  : 'text-[#49423c] hover:text-[#231f1c] hover:bg-white/60'
              }`}
            >
              Selección Natural & Darwin
            </button>
          </div>
        </div>

        {/* Dual Pillar Overview Cards: Ontogenético vs Filogenético */}
        <div className="mt-6 pt-6 border-t border-[#d4cbc2]/60 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#f0f6f9] p-4 sm:p-5 rounded-2xl border border-[#205b76]/30">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#205b76]/15 flex items-center justify-center text-[#205b76]">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#0c3b52]">Desarrollo Ontogenético</h3>
                <span className="text-[11px] text-[#205b76] font-semibold">Dentro de la misma especie</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#315263] leading-relaxed">
              Consiste en <strong>comparar y estudiar dentro de la misma especie</strong> el desarrollo del Sistema Nervioso.
            </p>
            <div className="mt-3 p-2.5 bg-white/85 rounded-lg border border-[#205b76]/20 text-xs text-[#0c3b52]">
              <strong>Especie:</strong> Un grupo de organismos que está aislado (desde el punto de vista reproductivo) de otros organismos. Los miembros de una especie no pueden generar descendencia fértil con los de otra especie.
            </div>
          </div>

          <div className="bg-[#edf5f0] p-4 sm:p-5 rounded-2xl border border-[#2b553c]/30">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#2b553c]/15 flex items-center justify-center text-[#2b553c]">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#162e21]">Desarrollo Filogenético</h3>
                <span className="text-[11px] text-[#2b553c] font-semibold">Comparación con otras especies</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#274835] leading-relaxed">
              Consiste en <strong>estudiar y comparar el SN con otras especies</strong>, partiendo de que se considera que la vida se originó en el agua en organismos unicelulares.
            </p>
            <div className="mt-3 p-2.5 bg-white/85 rounded-lg border border-[#2b553c]/20 text-xs text-[#162e21]">
              <strong>Encefalización:</strong> Procesos de incorporar nuevos sistemas y dar más peso al encéfalo como organismo centralizado.
            </div>
          </div>
        </div>

        {/* Callout Tip Exacto de Clase */}
        <div className="mt-4 p-3.5 bg-[#fef7e6] border-2 border-amber-300/90 rounded-xl flex items-start gap-3">
          <div className="w-7 h-7 rounded-lg bg-amber-200/70 text-amber-900 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Pin className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-amber-950">
            <span className="font-bold uppercase tracking-wider text-[11px] text-amber-800 block">
              Nota Clave de Clase [!tip]:
            </span>
            <strong>Solo el reino animalia tiene sistema nervioso, plantae y fungi tiene terminaciones sensoriales descentralizada.</strong>
          </div>
        </div>
      </div>

      {/* 2. SUBTAB: BASES, REINOS & ENCEFALIZACIÓN */}
      {activeSubTab === 'organizacion' && (
        <div className="space-y-6">
          {/* Origen y Concepto de Especie */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#205b76] text-white">
                  Concepto de Especie
                </span>
                <span className="text-xs font-semibold text-[#205b76]">
                  Aislamiento Reproductivo
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#231f1c] leading-relaxed">
                Un grupo de organismos que está aislado (desde el punto de vista reproductivo) de otros organismos.
              </p>
              <div className="mt-3 p-3 rounded-xl bg-[#f0f6f9] border border-[#205b76]/25 text-xs text-[#0c3b52]">
                <strong>Regla reproductiva:</strong> Los miembros de una especie <strong>no pueden generar descendencia fértil</strong> con los de otra especie.
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#2b553c] text-white">
                  Origen Evolutivo
                </span>
                <span className="text-xs font-semibold text-[#2b553c]">
                  Agua y Unicelulares
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#231f1c] leading-relaxed">
                Se considera que <strong>la vida se originó en el agua en organismos unicelulares</strong>.
              </p>
              <div className="mt-3 p-3 rounded-xl bg-[#edf5f0] border border-[#2b553c]/25 text-xs text-[#162e21]">
                <strong>Distinción por Reinos:</strong> Solo el reino <strong>Animalia</strong> tiene sistema nervioso; <strong>Plantae y Fungi</strong> tienen terminaciones sensoriales descentralizadas.
              </div>
            </div>
          </div>

          {/* Progresión Organizativa de las Neuronas y Áreas Terciarias */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold text-[#292420] mb-1">
              Organización Neuronal en el Desarrollo Filogenético y Ganancia Humana
            </h3>
            <p className="text-xs text-[#787169] mb-4">
              Secuencia paso a paso desde los primeros grupos ganglionares hasta las áreas terciarias del ser humano:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="p-3.5 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] flex flex-col justify-between">
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#8c5e3c] text-white text-xs font-bold flex items-center justify-center mb-2">
                    1
                  </span>
                  <h4 className="font-bold text-xs text-[#292420] mb-1">Ganglios sin Integrador Central</h4>
                  <p className="text-xs text-[#49423c] leading-relaxed">
                    Implica organización de las neuronas en grupos inicialmente en <strong>ganglios con control segmental pero sin integrador central</strong>.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] flex flex-col justify-between">
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#8c5e3c] text-white text-xs font-bold flex items-center justify-center mb-2">
                    2
                  </span>
                  <h4 className="font-bold text-xs text-[#292420] mb-1">Agrupación Integradora Central</h4>
                  <p className="text-xs text-[#49423c] leading-relaxed">
                    Se forma una <strong>agrupación integradora central</strong> que coordina la información.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] flex flex-col justify-between">
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#8c5e3c] text-white text-xs font-bold flex items-center justify-center mb-2">
                    3
                  </span>
                  <h4 className="font-bold text-xs text-[#292420] mb-1">Estructuras Básicas del Cerebro</h4>
                  <p className="text-xs text-[#49423c] leading-relaxed">
                    Se desarrollan las <strong>estructuras básicas del cerebro</strong> sobre el integrador central.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] flex flex-col justify-between">
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#8c5e3c] text-white text-xs font-bold flex items-center justify-center mb-2">
                    4
                  </span>
                  <h4 className="font-bold text-xs text-[#292420] mb-1">Desarrollo del Prosencéfalo</h4>
                  <p className="text-xs text-[#49423c] leading-relaxed">
                    Se agregan estructuras paulatinamente hasta <strong>desarrollar el prosencéfalo</strong>.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fdf5ee] border-2 border-[#944920]/40 flex flex-col justify-between">
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#944920] text-white text-xs font-bold flex items-center justify-center mb-2">
                    5
                  </span>
                  <h4 className="font-bold text-xs text-[#522510] mb-1">Áreas Terciarias (Ganancia Humana)</h4>
                  <p className="text-xs text-[#522510] leading-relaxed">
                    La adquisición de las <strong>áreas terciarias</strong> es la ganancia en el ser humano, tanto la <strong>PTO [Parieto-Tempo-Occipital]</strong> como las <strong>prefrontales</strong>. Estas últimas abarcan <strong>1/4 del total del cerebro</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. SUBTAB: ESCALA FILOGENÉTICA & TEORÍA DE LOS 3 CEREBROS DE MACLEAN */}
      {activeSubTab === 'filogenia' && (
        <div className="space-y-6">
          {/* Escala Filogenética Completa */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#292420]">
                  Escala del Desarrollo Filogenético Animal
                </h3>
                <p className="text-xs text-[#787169]">
                  Desde los animales bi-cordados hasta el orden de los primates y la familia de los homínidos
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#2b553c]/10 text-[#2b553c]">
                Secuencia Evolutiva Completa
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2]">
                <span className="font-bold text-[#704812] block mb-1">1. Animales Bi-cordados</span>
                <p className="text-[#49423c]">
                  Existen animales bi-cordados con una <strong>doble línea nerviosa</strong> que evolucionaron en animales cordados con una única línea nerviosa.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2]">
                <span className="font-bold text-[#704812] block mb-1">2. Seres Cordados</span>
                <p className="text-[#49423c]">
                  Cuentan con una <strong>única línea nerviosa</strong>; se agrupan las neuronas a lo largo de la <strong>médula espinal</strong> y se denominan seres cordados.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2]">
                <span className="font-bold text-[#704812] block mb-1">3. Vertebrados</span>
                <p className="text-[#49423c]">
                  Ahora hay un <strong>esqueleto que rodea y protege la médula espinal</strong> y se denominan: <strong>Vertebrados</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f0f6f9] border border-[#205b76]/30">
                <span className="font-bold text-[#0c3b52] block mb-1">4. Peces Óseos → Anfibio</span>
                <p className="text-[#315263]">
                  Los primeros vertebrados son los <strong>peces óseos</strong> y al salir del agua se les denomina: <strong>Anfibio</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#faf3e6] border border-[#8c5e3c]/30">
                <span className="font-bold text-[#451a03] block mb-1">5. Reptiles</span>
                <p className="text-[#451a03]">
                  Cuando <strong>se independizan del agua</strong> ahora son <strong>reptiles</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fdf5ee] border border-[#944920]/30">
                <span className="font-bold text-[#522510] block mb-1">6. Mamíferos</span>
                <p className="text-[#522510]">
                  Cuando <strong>dejan de poner huevos</strong> y las hembras empiezan a <strong>amamantar a sus crías</strong> se convierten en Mamíferos; además desarrollan <strong>sistema límbico complejo</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#edf5f0] border border-[#2b553c]/30">
                <span className="font-bold text-[#162e21] block mb-1">7. Orden Primates</span>
                <p className="text-[#274835]">
                  Dentro de los mamíferos se encuentran los <strong>primates</strong>. En la evolución del cerebro en los primates: <strong>el tamaño del cerebro no explica por sí solo la evolución</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#edf5f0] border-2 border-[#2b553c]/50">
                <span className="font-bold text-[#162e21] block mb-1">8. Familia Homínidos</span>
                <p className="text-[#274835]">
                  Nosotros somos una familia de dicha orden (primates): los <strong>homínidos</strong>. Rasgos: <strong>Primates sin cola</strong> y <strong>visión estereoscópica y tricrómica</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Teoría de los 3 tipos de cerebros según MacLean */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold text-[#292420] mb-1">
              Teoría de los 3 Tipos de Cerebros según MacLean
            </h3>
            <p className="text-xs text-[#787169] mb-4">
              Clasificación triuna expuesta en los apuntes de clase:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {macLeanBrainsList.map((brain, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border-2 bg-[#fbf8f5] border-[#d4cbc2] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-bold text-sm text-[#292420]">{brain.name}</span>
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: brain.color }}
                      >
                        {brain.trait}
                      </span>
                    </div>
                    <p className="text-xs text-[#49423c] leading-relaxed">
                      {brain.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. SUBTAB: PROCESO DE HOMINIZACIÓN, TAMAÑOS Y PRESIONES SELECTIVAS */}
      {activeSubTab === 'hominizacion' && (
        <div className="space-y-6">
          {/* Header notice */}
          <div className="bg-[#fef7e6] border border-amber-300 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="font-bold text-xs sm:text-sm text-amber-950">
                Proceso de Hominización:
              </p>
              <p className="text-xs text-amber-900 mt-0.5">
                Sigue el mismo principio de selección natural: es el proceso mediante el cual se han desarrollado las <strong>características homo</strong> para llegar al ser actual.
              </p>
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              {(['Todos', 'Ancestro', 'Australopiteco', 'Género Homo'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setHominidFilter(f)}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium transition cursor-pointer ${
                    hominidFilter === f
                      ? 'bg-[#2b553c] text-white'
                      : 'bg-white text-[#49423c] border border-amber-200 hover:bg-amber-50'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Grid + Inspector Layout for Hominid Chain */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* List of Hominid stages */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredStages.map(stage => {
                const isSelected = selectedStage.code === stage.code;
                return (
                  <div
                    key={stage.code}
                    onClick={() => setSelectedStage(stage)}
                    className={`p-3.5 rounded-xl border transition cursor-pointer ${
                      isSelected
                        ? 'bg-[#f4efe9] border-[#2b553c] ring-1 ring-[#2b553c]'
                        : 'bg-white border-[#d4cbc2] hover:border-[#b8aba0] hover:bg-[#faf7f4]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-[#2b553c] text-white text-xs font-bold flex items-center justify-center font-serif">
                          {stage.order}
                        </span>
                        <h4 className="font-bold text-xs sm:text-sm text-[#292420]">
                          {stage.name}
                        </h4>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-100 text-amber-900">
                        {stage.brainVolume}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#49423c] line-clamp-2">
                      {stage.summary}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Detailed Dossier of Selected Hominid Stage */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs space-y-4">
              <div className="border-b border-[#d4cbc2]/60 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#787169] uppercase tracking-wider">
                    Etapa {selectedStage.order} de 6 • {selectedStage.type}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-[#944920] text-white">
                    Cerebro: {selectedStage.brainVolume}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#292420] mt-1">
                  {selectedStage.name}
                </h3>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#787169] uppercase tracking-wider mb-2">
                  Puntos de Clase:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#231f1c]">
                  {selectedStage.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[#fbf8f5] p-2 rounded-lg border border-[#d4cbc2]/50">
                      <ChevronRight className="w-3.5 h-3.5 text-[#2b553c] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-[#fef7e6] border border-amber-300 rounded-xl text-xs text-amber-950">
                <p className="font-bold text-amber-900 mb-1">
                  Dato Clave de Examen:
                </p>
                <p>{selectedStage.examKey}</p>
              </div>
            </div>
          </div>

          {/* Tamaños y diferencias de cerebros + 5 Presiones selectivas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
              <h3 className="text-base font-bold text-[#292420] mb-2">
                Tamaños y Diferencias de Cerebros
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm text-[#49423c]">
                <div className="p-3 rounded-xl bg-[#fdf5ee] border border-[#944920]/30 text-[#522510]">
                  • <strong>El tamaño del cerebro no explica por sí solo la evolución</strong> (en la evolución del cerebro en los primates).
                </div>
                <div className="p-3 rounded-xl bg-[#fdf5ee] border border-[#944920]/30 text-[#522510]">
                  • <strong>El tamaño del cerebro no diferencia la inteligencia.</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#edf5f0] border border-[#2b553c]/30 text-[#162e21]">
                  • <strong>La diferencia la crean las conexiones y la velocidad de procesamiento.</strong>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
              <h3 className="text-base font-bold text-[#292420] mb-2">
                5 Presiones Selectivas en la Evolución del SN en Homínidos
              </h3>
              <div className="space-y-2 text-xs">
                {selectivePressuresList.map(item => (
                  <div
                    key={item.number}
                    className="p-2.5 rounded-lg bg-[#fbf8f5] border border-[#d4cbc2]/70 flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#2b553c] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <span className="font-bold text-[#292420] block">{item.title}</span>
                      <span className="text-[#49423c] text-[11px]">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. SUBTAB: EL ORIGEN DE LAS ESPECIES & DARWIN EN EL DESARROLLO FILOGENÉTICO */}
      {activeSubTab === 'darwin' && (
        <div className="space-y-6">
          {/* El origen de las especies */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#2b553c]/15 text-[#2b553c]">
                Selección Natural
              </span>
              <h3 className="text-base font-bold text-[#292420]">
                El Origen de las Especies
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#49423c] leading-relaxed">
              Las características actuales han sido la selección de entre otras características por ser <strong>las más adaptativas</strong>, mediante el principio de <strong>Selección Natural</strong>.
            </p>
          </div>

          {/* Teoría de la evolución de Charles Darwin en el desarrollo filogenético */}
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold text-[#292420] mb-1">
              Teoría de la Evolución de Charles Darwin en el Desarrollo Filogenético
            </h3>
            <p className="text-xs text-[#787169] mb-4">
              Los 6 principios fundamentales que articulan genética, herencia, ambiente, actividad nerviosa y comportamiento presente:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {darwinPostulatesList.map(postulate => (
                <div
                  key={postulate.number}
                  className="p-4 rounded-xl bg-[#fbf8f5] border border-[#d4cbc2] flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#205b76] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {postulate.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#292420] leading-snug">
                      {postulate.statement}
                    </h4>
                    <p className="text-xs text-[#49423c] mt-1 leading-relaxed">
                      {postulate.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
