class UserMailer < ActionMailer::Base
  default from: "everybody@appacademy.io"

  def welcome_email
    mail(to: 'dsulfaro1@gmail.com', subject: 'Hey Dan, it\'s your code?')
  end
end
