import { Reveal } from '@/components/Reveal';

export const metadata = {
  title: 'Registration Terms & Conditions',
  description: 'The official CaeloraMUN 2026 Registration Terms & Conditions for Delegates and International Press.'
};

const SECTIONS = [
  {
    id: 'eligibility',
    title: '1. Eligibility & Registration',
    items: [
      'CaeloraMUN 2026 is open to participants from different backgrounds, institutions, schools, and colleges.',
      'Registration is individual. Participants may participate independently or represent their school or college, where applicable.',
      'All information submitted during registration must be accurate, complete, and authentic.',
      'CaeloraMUN reserves the right to verify the information provided by participants.',
      'Submission of a registration form does not automatically guarantee acceptance. Registration is subject to verification and confirmation by the CaeloraMUN Secretariat.',
      'Providing false, misleading, incomplete, or fraudulent information may result in cancellation of the registration without refund.'
    ]
  },
  {
    id: 'committee-selection',
    title: '2. Committee Selection & Allocation',
    items: [
      'Participants may indicate their preferred committee during registration.',
      'Committee preferences are requests and do not guarantee allocation to the selected committee.',
      'The final committee allocation shall be determined by the CaeloraMUN Secretariat, taking into consideration committee availability, conference requirements, participant preferences, and other administrative considerations.',
      'The Secretariat reserves the right to allocate a participant to a committee other than their preferred choice.',
      'Once a committee has been allocated, participants are expected to participate in the committee assigned to them.',
      'Participants may not transfer their allocated committee, portfolio, or participation to another individual.',
      'Any request for a change of committee or portfolio shall be subject to the approval of the Secretariat and is not guaranteed.'
    ]
  },
  {
    id: 'cancellation',
    title: '3. Registration Cancellation, Refunds & Transfer',
    items: [
      'All registrations are non-transferable.',
      'A participant may not transfer their registration, seat, committee allocation, portfolio, or participation to another individual.',
      'Registration fees are non-refundable, except in the event that CaeloraMUN officially cancels the conference.',
      'In the event of an official cancellation by CaeloraMUN, the applicable registration amount paid by the participant shall be refunded in accordance with the refund process communicated by the Secretariat.',
      'Voluntary withdrawal, non-attendance, failure to participate, or inability to attend the conference shall not ordinarily qualify for a refund.',
      'CaeloraMUN reserves the right to cancel a registration in cases involving false information, fraudulent payment, misconduct, or violation of these Terms & Conditions.',
      'A registration cancelled due to misconduct, fraudulent activity, or violation of conference rules shall not ordinarily be eligible for a refund.'
    ]
  },
  {
    id: 'attendance',
    title: '4. Conference Attendance',
    items: [
      'Participants are not required to maintain a specific minimum attendance percentage for participation.',
      'Participants may attend the conference according to their individual circumstances, subject to the conference schedule and venue regulations.',
      'Participants are expected to follow the instructions of the Secretariat, Executive Board, Organising Committee, and authorised conference personnel while present at the venue.',
      'Participants are responsible for ensuring that their presence does not disrupt committee proceedings or other conference activities.',
      'Specific attendance requirements may apply to particular activities, sessions, or proceedings where communicated by the Secretariat.'
    ]
  },
  {
    id: 'code-of-conduct',
    title: '5. Code of Conduct',
    intro:
      'All participants are expected to maintain professional, respectful, and responsible conduct throughout CaeloraMUN 2026. The following conduct is strictly prohibited:',
    items: [
      'Harassment or intimidation of any participant, staff member, or conference representative.',
      'Bullying or threatening behaviour.',
      'Discrimination or hateful conduct.',
      'Physical violence or threats of violence.',
      'Verbal abuse or inappropriate behaviour.',
      'Smoking or vaping within prohibited areas or the conference premises.',
      'Possession, consumption, distribution, or use of alcohol or prohibited substances at the conference.',
      'Any behaviour that intentionally disrupts conference proceedings.',
      'Damage, destruction, or misuse of venue property or conference equipment.',
      'Any conduct that compromises the safety, dignity, privacy, or comfort of another participant.',
      'Any other conduct that the Secretariat reasonably determines to be inappropriate or contrary to the standards of the conference.'
    ],
    outro:
      'CaeloraMUN reserves the right to take appropriate disciplinary action against any participant who violates the Code of Conduct. Depending on the nature and severity of the violation, disciplinary action may include:',
    items2: [
      'Verbal or written warning.',
      'Removal from a particular activity.',
      'Suspension from committee proceedings.',
      'Cancellation of registration.',
      'Removal from the conference premises.',
      'Disqualification from awards or recognitions.',
      'Any other appropriate action determined by the Secretariat.'
    ]
  },
  {
    id: 'secretariat-authority',
    title: '6. Secretariat Authority',
    items: [
      'The CaeloraMUN Secretariat shall have final authority in matters relating to committee and portfolio allocation; conference administration and operations; disciplinary matters and participant conduct; and interpretation and implementation of the conference rules and regulations.',
      'Participants are required to respect and comply with decisions and instructions issued by the Secretariat, Executive Board, Organising Committee, and other authorised conference personnel.',
      'Decisions regarding awards and recognitions shall be made by the designated authorities of CaeloraMUN and shall be considered final and not subject to appeal.',
      'The Secretariat reserves the right to take appropriate action where circumstances arise that are not specifically addressed in these Terms & Conditions or the applicable Rules of Procedure.',
      'Decisions made by the Secretariat under this section shall be considered final for the administration and conduct of CaeloraMUN 2026.'
    ]
  },
  {
    id: 'media',
    title: '7. Photography, Videography & Media',
    items: [
      'By registering for and attending CaeloraMUN 2026, participants acknowledge that photography, videography, audio recording, and other forms of media coverage may take place during the conference.',
      'CaeloraMUN may use photographs, videos, recordings, and other media containing participants for legitimate conference-related purposes, including official social media platforms, the official website and digital platforms, promotional material, conference documentation, post-conference content, and future CaeloraMUN promotional campaigns.',
      'Participants acknowledge that content published through official CaeloraMUN channels may be publicly accessible.',
      'By registering for the conference, participants consent to the collection and use of conference-related photographs, videos, and recordings in accordance with this section.'
    ]
  },
  {
    id: 'accuracy-fraud',
    title: '8. Accuracy, Fraud & Misrepresentation',
    items: [
      'Participants must provide truthful and accurate information during the registration process.',
      'Submission of false information, forged documents, fraudulent payment proof, impersonation, or any other form of fraudulent activity may result in immediate cancellation of registration.',
      'Participants found engaging in fraudulent or deceptive practices may be prohibited from participating in the conference.',
      'Registration cancelled due to fraud, misrepresentation, or submission of false information may not be eligible for a refund.',
      'CaeloraMUN reserves the right to verify registration information and payment details where reasonably necessary.'
    ]
  },
  {
    id: 'minors',
    title: '9. Minors & Guardian Consent',
    items: [
      'Participants below the age of 18 must obtain consent from a parent or legal guardian.',
      'The required guardian signature must be provided through the designated registration process.',
      "By providing consent, the parent or legal guardian acknowledges the participant's registration and participation in CaeloraMUN 2026 and agrees to the applicable conference terms.",
      'CaeloraMUN may request additional information or documentation where reasonably necessary for participant safety, verification, or administrative purposes.',
      'Submission of guardian consent does not exempt the participant from complying with the conference rules and Code of Conduct.'
    ]
  },
  {
    id: 'personal-information',
    title: '10. Personal Information',
    items: [
      'Information collected through the registration form may be used for legitimate conference-related purposes, including registration processing, participant communication, committee allocation, identity or registration verification, certificates, conference administration, logistical arrangements, and other purposes directly related to conducting CaeloraMUN.',
      'Participants are responsible for ensuring that the information submitted by them is accurate and up to date.',
      'Access to registration information shall be limited to authorised personnel who require such information for legitimate conference-related purposes.',
      'Participants should not submit information that is not requested or necessary for registration.'
    ]
  },
  {
    id: 'changes',
    title: '11. Changes to Conference Arrangements',
    items: [
      'CaeloraMUN 2026 is scheduled to take place from 13–15 November 2026.',
      'CaeloraMUN intends to conduct the conference on the scheduled dates; however, the Secretariat reserves the right to make reasonable changes to conference arrangements where circumstances require.',
      'Such changes may include changes to conference schedules, committee arrangements, Executive Board members, activities, session timings, or other conference-related arrangements.',
      'Participants shall be informed of significant changes through official CaeloraMUN communication channels wherever reasonably possible.',
      'In the unlikely event that CaeloraMUN officially cancels the conference, the applicable registration amount paid by the participant shall be refunded in accordance with the cancellation and refund process communicated by the Secretariat.'
    ]
  },
  {
    id: 'venue',
    title: '12. Venue & Personal Responsibility',
    items: [
      'Participants are required to comply with all rules and regulations of the conference venue.',
      'Participants are responsible for their personal belongings throughout the conference.',
      'CaeloraMUN shall not be responsible for the loss, theft, or damage of personal belongings brought to the conference.',
      'Participants may be held responsible for damage to venue property, conference equipment, or other property caused by their actions or negligence.',
      'Participants must follow all reasonable safety and security instructions issued by venue personnel and authorised CaeloraMUN representatives.'
    ]
  },
  {
    id: 'awards',
    title: '13. Awards & Recognition',
    items: [
      'Awards and recognitions shall be determined by the designated Executive Board and/or authorised conference authorities according to the applicable evaluation criteria and conference procedures.',
      'Participants acknowledge that award decisions may be based on committee performance, participation, conduct, and other relevant criteria determined by the designated authorities.',
      'Award decisions shall be final and not subject to appeal.',
      'CaeloraMUN reserves the right to withhold an award where the applicable requirements have not been met or where a participant has been found to have violated conference rules.'
    ]
  },
  {
    id: 'acceptance',
    title: '14. Acceptance of Terms',
    intro: 'By submitting the CaeloraMUN 2026 registration form, the participant confirms that:',
    items: [
      'The information provided is accurate, complete, and authentic.',
      'They have read and understood these Registration Terms & Conditions.',
      'They agree to comply with the CaeloraMUN Code of Conduct.',
      'They agree to comply with applicable Rules of Procedure and conference guidelines.',
      'They understand that committee preferences are not guaranteed.',
      'They understand that final committee allocation is determined by the CaeloraMUN Secretariat.',
      'They understand that registration is non-transferable.',
      'They understand the applicable refund and cancellation provisions.',
      'They consent to photography, videography, and use of conference-related media as described in these Terms & Conditions.',
      'They agree to comply with instructions issued by the CaeloraMUN Secretariat and authorised conference personnel.',
      'Where applicable, they confirm that the required parent/guardian consent has been obtained.'
    ]
  },
  {
    id: 'final-provisions',
    title: '15. Final Provisions',
    items: [
      'CaeloraMUN reserves the right to amend, update, interpret, and enforce these Terms & Conditions where reasonably necessary for the administration, safety, security, and proper conduct of the conference.',
      'Any significant amendments shall be communicated through official CaeloraMUN communication channels where reasonably practicable.',
      'By completing and submitting the registration form, the participant acknowledges that these Terms & Conditions form part of the registration process and agrees to be bound by them.'
    ]
  }
];

export default function TermsPage() {
  return (
    <section className="bg-bg pt-36 pb-28">
      <div className="container-mun">
        <Reveal>
          <span className="eyebrow">CaeloraMUN 2026</span>
          <h1 className="font-display mt-5 text-4xl leading-[1.05] text-ink sm:text-5xl">
            Registration Terms &amp; Conditions
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-muted sm:text-base">
            Conference Dates: 13&ndash;15 November 2026 &middot; Organised by Caelora Productions. Applicable to
            Delegates &amp; International Press (IP). By submitting the registration form, the participant confirms
            that they have read, understood, and agreed to these Terms &amp; Conditions.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-[240px_1fr]">
          <nav className="hidden lg:sticky lg:top-28 lg:block lg:h-fit">
            <p className="eyebrow mb-4">On this page</p>
            <ul className="space-y-2.5 border-l border-line pl-4 text-sm text-muted">
              {SECTIONS.map(section => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="transition-colors hover:text-accent-bright">
                    {section.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#consent" className="transition-colors hover:text-accent-bright">
                  Registration Form Consent
                </a>
              </li>
            </ul>
          </nav>

          <div className="max-w-3xl space-y-16">
            {SECTIONS.map(section => (
              <article key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-display text-2xl text-ink sm:text-3xl">{section.title}</h2>
                {section.intro && <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{section.intro}</p>}
                <ul className="mt-5 space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {section.outro && <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">{section.outro}</p>}
                {section.items2 && (
                  <ul className="mt-5 space-y-3">
                    {section.items2.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            <article id="consent" className="scroll-mt-28 rounded-2xl border border-line bg-bg-elevated p-8">
              <p className="eyebrow">Applicable To</p>
              <p className="mt-2 text-sm text-ink">Delegates &amp; International Press (IP)</p>

              <h2 className="font-display mt-8 text-2xl text-ink">Registration Form Consent</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>
                    I have read and understood the CaeloraMUN 2026 Registration Terms &amp; Conditions and agree to
                    comply with them.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>I confirm that the information provided in this registration form is accurate and authentic.</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted">
                For participants under 18: Guardian consent/signature is required through the designated registration
                process.
              </p>
            </article>

            <p className="text-xs text-muted/70">
              CaeloraMUN 2026 &middot; 13&ndash;15 November 2026 &middot; Organised by Caelora Productions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
