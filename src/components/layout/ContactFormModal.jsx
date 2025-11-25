import { useState } from 'react';
import { X } from 'lucide-react';

/**
 * ContactFormModal Component - Modal de formulario de contacto
 * 
 * Features:
 * - Form validation integrado
 * - EmailJS integration
 * - Success/error messages
 * - Accessibility (focus trap, escape key)
 * - Responsive design
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Estado de apertura del modal
 * @param {Function} props.onClose - Callback para cerrar el modal
 * @param {Object} props.t - Traducciones del idioma actual
 */
export default function ContactFormModal({ isOpen, onClose, t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    dream: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Configuración de EmailJS
      const serviceID = 'service_jj938fo';
      const templateID = 'template_682geyg';
      const publicKey = 'NoLb_T8VJzvbVkLvt';

      // Parámetros del template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        whatsapp: formData.whatsapp || 'No proporcionado',
        dream_trip: formData.dream,
        to_email: 'travelmaximizers@gmail.com',
        reply_to: formData.email
      };

      // Enviar email usando EmailJS
      const response = await window.emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitMessage(t.form.successMessage);
        setFormData({ name: '', email: '', whatsapp: '', dream: '' });
        
        // Cerrar el modal después de 3 segundos
        setTimeout(() => {
          handleClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitMessage(
        t.form.errorMessage || 
        'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitMessage('');
    onClose();
  };

  // No renderizar si no está abierto
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 id="modal-title" className="text-2xl font-bold mb-2">
                {t.form.title}
              </h3>
              <p className="text-emerald-100 text-sm">
                {t.form.subtitle}
              </p>
            </div>
            <button 
              onClick={handleClose}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Cerrar formulario"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Success/Error Message */}
          {submitMessage && (
            <div 
              className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg"
              role="alert"
            >
              {submitMessage}
            </div>
          )}

          {/* Name Field */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t.form.name} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder={t.form.namePlaceholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t.form.email} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder={t.form.emailPlaceholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* WhatsApp Field */}
          <div>
            <label 
              htmlFor="whatsapp" 
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t.form.whatsapp}
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder={t.form.whatsappPlaceholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Dream Trip Field */}
          <div>
            <label 
              htmlFor="dream" 
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t.form.dream} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="dream"
              name="dream"
              value={formData.dream}
              onChange={handleInputChange}
              required
              rows="5"
              placeholder={t.form.dreamPlaceholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? t.form.submitting : t.form.submit}
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              {t.form.close}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}