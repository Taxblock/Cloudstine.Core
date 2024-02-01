import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poi',
  templateUrl: './poi.component.html',
  styleUrls: ['./poi.component.scss']
})
export class PoiComponent implements OnInit {
  faqData = [
    { question: 'What is email hosting?', answer: ' Email hosting is a service that allows you to send and receive emails using your own domain name. Aside from customization and increased storage space, this email service allows you to brand yourself professionally while offering a high level of security and data privacy.', showAnswer: false },
    { question: 'What are the advantages of using an email hosting service over running personal email servers?', answer: 'Managing your own email servers can be daunting, especially when it comes to securing them from spam and DDoS attacks. This is where email hosting comes in.', showAnswer: false },
    { question: 'What is a business email?', answer: 'Business email is an email address that uses a custom domain-based address (for example, your business email can be you@yourdomain.com). It’s used explicitly for business and professional communications and adds more credibility to your brand. With a business email, you get professional branding, easy scalability, and increased security.', showAnswer: false },
    { question: 'How is business email different from personal email?', answer: 'Personal email works for one-to-one exchanges with friends and family. It can also be used for signing up for personal services and personal social media accounts.', showAnswer: false },

  ];
  constructor() { }

  ngOnInit(): void {
  }
  toggleAnswer(faqItem): void {
    faqItem.showAnswer = !faqItem.showAnswer;
  }
}
