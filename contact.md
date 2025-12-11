---
layout: page
title: Contact Us
permalink: /contact
---

<section id="contact-page" style="padding: 100px 0; background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);">
    <div class="container">
        <div class="row">
            <!-- Header Section -->
            <div class="col-lg-12 text-center">
                <div class="contact-hero-section">
                    <div class="contact-hero-badge">
                        <i class="fa fa-envelope"></i>
                        <span data-translate="contact.page.badge">Get In Touch</span>
                    </div>
                    <h1 class="contact-hero-title">
                        <span class="contact-title-main" data-translate="contact.page.title">Let's Build Something Amazing Together</span>
                    </h1>
                    <div class="contact-hero-divider">
                        <div class="divider-line"></div>
                        <div class="divider-icon">
                            <i class="fa fa-circle"></i>
                        </div>
                        <div class="divider-line"></div>
                    </div>
                    <p class="contact-hero-description" data-translate="contact.page.description">
                        Ready to explore how AI can transform your operations? We're here to help. Send us a message and let's discuss how we can bring your vision to life.
                    </p>
                </div>
            </div>
        </div>

        <div class="row" style="margin-top: 60px;">
            <!-- Contact Form -->
            <div class="col-lg-8 col-lg-offset-2">
                <div class="contact-form-wrapper">
                    <form id="contact-form" action="https://formspree.io/f/xpwnqjqk" method="POST" class="contact-form-modern" novalidate>
                        <div class="form-group-modern">
                            <label for="name" data-translate="contact.form.name.label">Your Name</label>
                            <input type="text" id="name" name="name" class="form-control-modern" required 
                                   placeholder="" data-translate-placeholder="contact.form.name.placeholder">
                        </div>

                        <div class="form-group-modern">
                            <label for="email" data-translate="contact.form.email.label">Your Email</label>
                            <input type="email" id="email" name="email" class="form-control-modern" required 
                                   placeholder="" data-translate-placeholder="contact.form.email.placeholder">
                            <!-- Hidden field for Formspree reply-to -->
                            <input type="hidden" name="_replyto" id="_replyto">
                        </div>

                        <div class="form-group-modern">
                            <label for="company" data-translate="contact.form.company.label">Company (Optional)</label>
                            <input type="text" id="company" name="company" class="form-control-modern" 
                                   placeholder="" data-translate-placeholder="contact.form.company.placeholder">
                        </div>

                        <div class="form-group-modern">
                            <label for="subject" data-translate="contact.form.subject.label">Subject</label>
                            <select id="subject" name="subject" class="form-control-modern" required>
                                <option value="" data-translate-key="contact.form.subject.option.default">Select a topic...</option>
                                <option value="custom-ai" data-translate-key="contact.form.subject.option.custom-ai">Custom AI Development</option>
                                <option value="etl" data-translate-key="contact.form.subject.option.etl">ETL & Data Engineering</option>
                                <option value="dashboards" data-translate-key="contact.form.subject.option.dashboards">Dashboards & Analytics</option>
                                <option value="software" data-translate-key="contact.form.subject.option.software">Custom Software Solutions</option>
                                <option value="training" data-translate-key="contact.form.subject.option.training">Training & AI Literacy</option>
                                <option value="general" data-translate-key="contact.form.subject.option.general">General Inquiry</option>
                            </select>
                        </div>

                        <div class="form-group-modern">
                            <label for="message" data-translate="contact.form.message.label">Your Message</label>
                            <textarea id="message" name="message" class="form-control-modern" rows="6" required 
                                      placeholder="" data-translate-placeholder="contact.form.message.placeholder"></textarea>
                        </div>

                        <div class="form-group-modern">
                            <button type="submit" class="btn btn-primary btn-xl btn-modern-contact" data-translate="contact.form.submit">
                                <i class="fa fa-paper-plane" style="margin-right: 8px;"></i>
                                Send Message
                            </button>
                        </div>

                        <div id="form-message" class="form-message" style="display: none;"></div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Contact Information -->
        <div class="row" style="margin-top: 80px;">
            <div class="col-lg-4 col-md-4 text-center">
                <div class="contact-info-card">
                    <div class="contact-info-icon">
                        <i class="fa fa-envelope"></i>
                    </div>
                    <h4 data-translate="contact.info.email.title">Email Us</h4>
                    <p><a href="mailto:{{ site.email }}" data-translate="contact.info.email.value">{{ site.email }}</a></p>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 text-center">
                <div class="contact-info-card">
                    <div class="contact-info-icon">
                        <i class="fa fa-clock-o"></i>
                    </div>
                    <h4 data-translate="contact.info.response.title">Response Time</h4>
                    <p data-translate="contact.info.response.value">We typically respond within 24-48 hours</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 text-center">
                <div class="contact-info-card">
                    <div class="contact-info-icon">
                        <i class="fa fa-globe"></i>
                    </div>
                    <h4 data-translate="contact.info.location.title">Location</h4>
                    <p data-translate="contact.info.location.value">El Salvador, Central America</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
/* Contact Hero Section */
.contact-hero-section {
    padding: 40px 20px 60px;
    position: relative;
}

.contact-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #0A284B 0%, #0ea5a3 100%);
    color: white;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 30px;
    box-shadow: 0 8px 20px rgba(10, 40, 75, 0.2);
}

.contact-hero-title {
    margin: 0 0 30px 0;
    position: relative;
}

.contact-title-main {
    display: block;
    font-size: 3.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #0A284B 0%, #0ea5a3 50%, #0A284B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% auto;
    animation: gradientShift 3s ease infinite;
    letter-spacing: -1px;
    line-height: 1.2;
}

.contact-hero-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 35px auto 40px;
    max-width: 400px;
}

.divider-line {
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, transparent, #0ea5a3, transparent);
    border-radius: 2px;
}

.divider-icon {
    width: 12px;
    height: 12px;
    background: #0ea5a3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.divider-icon i {
    font-size: 6px;
    color: white;
}

.contact-hero-description {
    max-width: 800px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 1.8;
    color: #555;
}

/* Contact Form */
.contact-form-wrapper {
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    padding: 50px;
    margin-bottom: 40px;
}

.contact-form-modern {
    max-width: 100%;
}

.form-group-modern {
    margin-bottom: 30px;
}

.form-group-modern label {
    display: block;
    font-weight: 600;
    color: #0A284B;
    margin-bottom: 10px;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.form-control-modern {
    width: 100%;
    padding: 15px 20px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.3s ease;
    background: #fafafa;
    font-family: inherit;
}

.form-control-modern:focus {
    outline: none;
    border-color: #0ea5a3;
    background: white;
    box-shadow: 0 0 0 3px rgba(14, 165, 163, 0.1);
}

.form-control-modern::placeholder {
    color: #999;
}

select.form-control-modern {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%230A284B' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 15px center;
    padding-right: 40px;
}

.btn-modern-contact {
    width: 100%;
    padding: 18px 40px;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(10, 40, 75, 0.2);
}

.btn-modern-contact:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(10, 40, 75, 0.3);
}

.form-message {
    margin-top: 20px;
    padding: 15px 20px;
    border-radius: 10px;
    font-weight: 500;
}

.form-message.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.form-message.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

/* Contact Info Cards */
.contact-info-card {
    padding: 40px 30px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    height: 100%;
}

.contact-info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.contact-info-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #0A284B 0%, #0ea5a3 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: white;
    font-size: 28px;
}

.contact-info-card h4 {
    color: #0A284B;
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;
}

.contact-info-card p {
    color: #666;
    font-size: 15px;
    margin: 0;
}

.contact-info-card a {
    color: #0ea5a3;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.contact-info-card a:hover {
    color: #0A284B;
}

@keyframes gradientShift {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

/* Responsive */
@media (max-width: 991px) {
    .contact-title-main {
        font-size: 2.5rem;
    }
    
    .contact-form-wrapper {
        padding: 40px 30px;
    }
    
    .contact-info-card {
        margin-bottom: 30px;
    }
}

@media (max-width: 767px) {
    #contact-page {
        padding: 60px 0 !important;
    }
    
    .contact-hero-section {
        padding: 40px 20px 50px;
    }
    
    .contact-hero-badge {
        font-size: 14px;
        padding: 10px 20px;
        margin-bottom: 24px;
    }
    
    .contact-title-main {
        font-size: clamp(1.75rem, 7vw, 2.2rem) !important;
        line-height: 1.15;
        margin-bottom: 20px;
    }
    
    .contact-hero-description {
        font-size: clamp(1rem, 4vw, 1.15rem) !important;
        line-height: 1.65;
        padding: 0 10px;
    }
    
    .contact-hero-divider {
        margin: 30px auto 35px;
        max-width: 300px;
    }
    
    .contact-form-wrapper {
        padding: 35px 25px;
        border-radius: 16px;
    }
    
    .form-group-modern {
        margin-bottom: 24px;
        
        label {
            font-size: 14px;
            margin-bottom: 8px;
        }
        
        .form-control-modern {
            padding: 14px 18px;
            font-size: 16px; // Prevents zoom on iOS
            border-radius: 8px;
        }
    }
    
    .btn-modern-contact {
        padding: 16px 32px;
        font-size: 16px;
        width: 100%;
    }
    
    .contact-info-card {
        padding: 30px 20px;
        margin-bottom: 24px;
        
        .contact-info-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 16px;
            
            i {
                font-size: 24px;
            }
        }
        
        h4 {
            font-size: 16px;
            margin-bottom: 12px;
        }
        
        p {
            font-size: 16px;
        }
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form before submission
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin" style="margin-right: 8px;"></i>Sending...';
            
            // Hide previous messages
            messageDiv.style.display = 'none';
            
            // Sync email to _replyto field for Formspree BEFORE creating FormData
            const emailField = form.querySelector('#email');
            const replyToField = form.querySelector('#_replyto');
            if (emailField && replyToField) {
                replyToField.value = emailField.value;
            }
            
            // Get form data (after updating _replyto)
            const formData = new FormData(form);
            
            // Add Formspree specific fields
            formData.append('_format', 'plain');
            
            // Log form data for debugging (remove in production if needed)
            console.log('Submitting form to:', form.action);
            for (let [key, value] of formData.entries()) {
                console.log(key + ':', value);
            }
            
            // Submit to Formspree
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(async response => {
                console.log('Formspree response status:', response.status);
                
                // Try to parse JSON, but handle non-JSON responses gracefully
                let data;
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    data = await response.json();
                    console.log('Formspree response data:', data);
                } else {
                    const text = await response.text();
                    console.log('Formspree response (non-JSON):', text);
                    data = { error: text || 'Unknown error' };
                }
                
                    if (response.ok) {
                        messageDiv.className = 'form-message success';
                        messageDiv.style.display = 'block';
                        const currentLang = localStorage.getItem('preferredLanguage') || 'en';
                        const successMessages = {
                            en: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
                            es: '¡Gracias! Tu mensaje ha sido enviado exitosamente. Te responderemos pronto.',
                            fr: 'Merci! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.'
                        };
                        messageDiv.textContent = successMessages[currentLang] || successMessages.en;
                        form.reset();
                    } else {
                        // Formspree returns error details in the response
                    const errorMsg = data.error || data.message || 'Network response was not ok';
                        console.error('Formspree error:', errorMsg);
                        throw new Error(errorMsg);
                    }
            })
            .catch(error => {
                console.error('Form submission error:', error);
                messageDiv.className = 'form-message error';
                messageDiv.style.display = 'block';
                const currentLang = localStorage.getItem('preferredLanguage') || 'en';
                
                // More specific error messages
                let errorMsg = '';
                if (error.message && error.message.includes('reCAPTCHA')) {
                    errorMsg = currentLang === 'es' 
                        ? 'Por favor completa el reCAPTCHA e intenta de nuevo.'
                        : currentLang === 'fr'
                        ? 'Veuillez compléter le reCAPTCHA et réessayer.'
                        : 'Please complete the reCAPTCHA and try again.';
                } else if (error.message && error.message.includes('rate limit')) {
                    errorMsg = currentLang === 'es'
                        ? 'Has enviado demasiados mensajes. Por favor espera unos minutos e intenta de nuevo.'
                        : currentLang === 'fr'
                        ? 'Vous avez envoyé trop de messages. Veuillez attendre quelques minutes et réessayer.'
                        : 'You have sent too many messages. Please wait a few minutes and try again.';
                } else {
                    const errorMessages = {
                        en: 'Oops! There was an error sending your message. Please try again or email us directly at contact@theatomic.ai',
                        es: '¡Ups! Hubo un error al enviar tu mensaje. Por favor intenta de nuevo o escríbenos directamente a contact@theatomic.ai',
                        fr: 'Oups! Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer ou nous écrire directement à contact@theatomic.ai'
                    };
                    errorMsg = errorMessages[currentLang] || errorMessages.en;
                }
                
                messageDiv.textContent = errorMsg;
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            });
        });
    }
    
    // Update placeholders when language changes (triggered by language.js)
    const updatePlaceholders = function() {
        const currentLang = localStorage.getItem('preferredLanguage') || 'en';
        const translations = {
            en: {
                'contact.form.name.placeholder': 'Enter your full name',
                'contact.form.email.placeholder': 'your.email@example.com',
                'contact.form.company.placeholder': 'Your company name',
                'contact.form.message.placeholder': 'Tell us about your project or inquiry...'
            },
            es: {
                'contact.form.name.placeholder': 'Ingresa tu nombre completo',
                'contact.form.email.placeholder': 'tu.correo@ejemplo.com',
                'contact.form.company.placeholder': 'Nombre de tu empresa',
                'contact.form.message.placeholder': 'Cuéntanos sobre tu proyecto o consulta...'
            },
            fr: {
                'contact.form.name.placeholder': 'Entrez votre nom complet',
                'contact.form.email.placeholder': 'votre.email@exemple.com',
                'contact.form.company.placeholder': 'Nom de votre entreprise',
                'contact.form.message.placeholder': 'Parlez-nous de votre projet ou demande...'
            }
        };
        
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(function(element) {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[currentLang] && translations[currentLang][key]) {
                element.placeholder = translations[currentLang][key];
            }
        });
    };
    
    // Update placeholders on load and when language changes
    updatePlaceholders();
    
    // Listen for language changes (custom event from language.js)
    document.addEventListener('languageChanged', updatePlaceholders);
    
    // Also update when language.js translates (using a small delay to ensure language.js has run)
    setTimeout(updatePlaceholders, 500);
});
</script>
