class User < ActiveRecord::Base
  has_many(:forms)


  def load_form_order
    form_order = {}
    self.forms.each do |form|
      form_order[form.order] = form.screen_number
    end
    form_order
  end
end
