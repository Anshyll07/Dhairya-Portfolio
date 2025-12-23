import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Eye, X, Code, Cpu, Video, Image as ImageIcon, Layers, ChevronLeft, ChevronRight } from 'lucide-react';

const expertiseData = [
  {
    id: 'web',
    title: 'Web Development',
    icon: <Code className="w-6 h-6" />,
    description: "Building scalable, high-performance web applications with modern architectures and seamless user experiences.",
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Flask', 'Tailwind CSS'],
    gallery: []
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    icon: <Cpu className="w-6 h-6" />,
    description: "Developing intelligent systems focusing on Computer Vision and Deep Learning frameworks to solve complex real-world problems.",
    tech: ['Python', 'Keras', 'YOLOv8', 'TensorFlow', 'OpenCV JS', 'Computer Vision', 'Deep Learning'],
    gallery: []
  },
  {
    id: 'video',
    title: 'Video Editing',
    icon: <Video className="w-6 h-6" />,
    description: "Professional video post-production, color grading, and storytelling to create compelling visual narratives.",
    tech: ['DaVinci Resolve'],
    gallery: []
  },
  {
    id: 'photo',
    title: 'Photo Editing',
    icon: <ImageIcon className="w-6 h-6" />,
    description: "High-end photo retouching, manipulation, and creative graphic design composition.",
    tech: ['Adobe Photoshop', 'Canva', 'Affinity Photo'],
    // Defined gallery for Photo Editing
    gallery: [
      '/designs/photo-1.jpg',
      '/designs/photo-2.jpg',
      '/designs/photo-3.jpg',
      '/designs/photo-4.jpg',
    ]
  }
];

const Expertise: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openPreview = (gallery: string[]) => {
    if (gallery.length > 0) {
      setCurrentGallery(gallery);
      setCurrentImageIndex(0);
      setIsModalOpen(true);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
  };

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            My Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Expertise That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Delivers Results</span>
          </h3>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {expertiseData.map((item, index) => (
            <div 
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-colors hover:border-primary/30"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-white/5 text-white group-hover:text-primary group-hover:bg-primary/10 transition-colors ${openIndex === index ? 'text-primary bg-primary/10' : ''}`}>
                    {item.icon}
                  </div>
                  <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} 
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-8 pt-2 border-t border-white/5">
                      <div className="flex flex-col md:flex-row gap-8">
                        
                        {/* Context Info */}
                        <div className="flex-1">
                          <p className="text-white leading-relaxed mb-6 text-lg">
                            {item.description}
                          </p>
                          
                          <div className="mb-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                            Technologies Used
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.tech.map((t) => (
                              <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-sm text-slate-200 border border-white/5">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Area - Only for Photo Editing */}
                        {item.id === 'photo' && (
                          <div className="flex flex-col justify-end md:w-1/3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openPreview(item.gallery);
                              }}
                              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-xl text-white font-medium hover:bg-primary/30 transition-all group/btn shadow-[0_0_15px_rgba(236,72,153,0.2)] hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]"
                            >
                              <Eye className="w-4 h-4" />
                              Show Preview
                            </button>
                            <p className="text-center text-xs text-slate-500 mt-2">
                              View gallery ({item.gallery.length} images)
                            </p>
                          </div>
                        )}

                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Liquid Glass Effect Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                // Liquid Glass Style Container
                className="relative max-w-6xl w-full max-h-[90vh] rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.1)] bg-white/5 backdrop-blur-2xl"
                onClick={(e) => e.stopPropagation()} 
              >
                
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
                  <span className="text-white/80 text-sm font-medium px-4 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
                    Image {currentImageIndex + 1} / {currentGallery.length}
                  </span>
                  <button 
                     onClick={() => setIsModalOpen(false)}
                     className="p-2 rounded-full bg-black/40 text-white hover:bg-red-500/80 transition-colors backdrop-blur-md border border-white/10"
                   >
                     <X className="w-6 h-6" />
                   </button>
                </div>
                
                {/* Main Image View */}
                <div className="flex items-center justify-center h-[70vh] md:h-[80vh] bg-black/20 relative">
                   
                   {/* Navigation Left */}
                   <button 
                     onClick={prevImage}
                     className="absolute left-4 z-20 p-3 rounded-full bg-black/20 border border-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-all hover:scale-110"
                   >
                     <ChevronLeft className="w-8 h-8" />
                   </button>

                   {/* Image Display */}
                   <div className="relative w-full h-full flex items-center justify-center p-8">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex items-center justify-center"
                        >
                           <img 
                             src={currentGallery[currentImageIndex]} 
                             alt={`Design Preview ${currentImageIndex + 1}`} 
                             className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                             onError={(e) => {
                               (e.target as HTMLImageElement).style.display = 'none';
                               (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                             }}
                           />
                           
                           {/* Fallback for missing images */}
                           <div className="hidden flex flex-col items-center justify-center text-center p-10 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md">
                              <Layers className="w-20 h-20 text-white/20 mb-4" />
                              <p className="text-white/50 text-xl font-medium">Preview Not Available</p>
                              <p className="text-white/30 text-sm mt-2 font-mono">
                                {currentGallery[currentImageIndex]}
                              </p>
                           </div>
                        </motion.div>
                      </AnimatePresence>
                   </div>

                   {/* Navigation Right */}
                   <button 
                     onClick={nextImage}
                     className="absolute right-4 z-20 p-3 rounded-full bg-black/20 border border-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-all hover:scale-110"
                   >
                     <ChevronRight className="w-8 h-8" />
                   </button>
                </div>

                {/* Thumbnails / Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                  <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentImageIndex + 1) / currentGallery.length) * 100}%` }}
                  />
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Expertise;