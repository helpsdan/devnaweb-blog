import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { useRouter } from 'next/router'
import NewsletterForm from '@/components/NewsletterForm'
import useTranslation from 'next-translate/useTranslation'

export default function Footer() {
  const { locale } = useRouter()
  const { t } = useTranslation()

  const { email, github, instagram, linkedin } = siteMetadata

  return (
    <footer>
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm title={t('newsletter:title')} />
        </div>
      )}
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${email}`} />
          <SocialIcon kind="github" href={github} />
          <SocialIcon kind="linkedin" href={linkedin} />
          <SocialIcon kind="instagram" href={instagram} />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` - `}</div>
          <div>{siteMetadata.description[locale]}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
