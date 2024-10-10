from djoser.email import ActivationEmail as BaseActivationEmail

class ActivationEmail(BaseActivationEmail):
  template_name = 'email/activation.html'