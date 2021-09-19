import clsx from 'clsx';
import pageStyles from 'src/styles/pages.styles.module.scss';
import { CardContent } from 'src/components/CardContent';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Ripple from 'material-ripple-effects';
import { createContactMessage } from 'src/redux/features/contactUs';
import Head from 'next/head';
import { useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactScreen = () => {
  const rippleEffect = new Ripple();
  const dispatch = useDispatch();
  const schema = Yup.object({
    fullname: Yup.string().required(),
    email: Yup.string().email().required(),
    message: Yup.string().min(10).required(),
    capthca: Yup.boolean().required(),
  });
  const {
    register,
    setError,
    setValue,
    getValues,
    trigger,
    clearErrors,
    formState: { errors },
  } = useForm<Yup.TypeOf<typeof schema>>({
    mode: 'onChange',
    defaultValues: {
      fullname: '',
      email: '',
      message: '',
      capthca: false,
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async () => {
    await trigger(['fullname', 'email', 'message']);
    if (Object.keys(errors).length > 0) {
      return;
    }
    const values = getValues();
    if (!values.capthca) {
      setError('capthca', {
        message: 'Please Fill out the captcha',
      });
      return;
    }
  };

  return (
    <>
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>
      <CardContent image="/assets/images/img-contact.png" title="Contact">
        <div className="mb-5">
          <p className={clsx('text-primary mb-2 font-bold')}>Location</p>
          <p className={clsx('text-secondary', pageStyles.contentParagraph)}>
            Sona Topas Tower,
          </p>
          <p className={clsx('text-secondary', pageStyles.contentParagraph)}>
            Jl. Jend. Sudirman No.Kav 26, RT.4/RW.2, Karet,
          </p>
          <p className={clsx('text-secondary', pageStyles.contentParagraph)}>
            Jakarta Selatan, 12920.
          </p>
        </div>
        <div className="mb-5">
          <p className={clsx('text-primary mb-2 font-bold')}>Email</p>
          <p className={clsx('text-secondary', pageStyles.contentParagraph)}>
            info@62trade.com
          </p>
        </div>
        <form
          className="w-full sm:w-4/5"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="relative w-full pb-6 mb-3">
            <input
              placeholder="Fullname"
              type="text"
              name="fullname"
              {...register('fullname')}
              className={clsx(
                'w-full h-10 px-5 py-3 border rounded outline-none border-gray50',
                errors.fullname && 'border-2 border-red60'
              )}
            />
            {errors.fullname && (
              <p className="absolute left-0 pl-5 text-sm -bottom-0 text-red60">
                {errors.fullname.message}
              </p>
            )}
          </div>
          <div className="relative w-full pb-6 mb-3">
            <input
              placeholder="Email"
              type="email"
              name="email"
              {...register('email')}
              className={clsx(
                'w-full h-10 px-5 py-3 border rounded outline-none border-gray50',
                errors.email && 'border-2 border-red60'
              )}
            />
            {errors.email && (
              <p className="absolute left-0 pl-5 text-sm -bottom-0 text-red60">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative w-full pb-5 mb-4">
            <textarea
              placeholder="Your message here"
              rows={4}
              name="message"
              {...register('message')}
              className={clsx(
                'w-full px-5 py-3 border rounded outline-none border-gray50',
                errors.message && 'border-2 border-red60'
              )}
            />
            {errors.message && (
              <p className="absolute left-0 pl-5 text-sm -bottom-0 text-red60">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="mb-5">
            {errors.capthca && (
              <p className="text-sm -bottom-0 text-red60">
                {errors.capthca.message}
              </p>
            )}
            <ReCAPTCHA
              sitekey={process.env.GOOGLE_SITE_KEY_CAPTCHA}
              onChange={(captachCode) => {
                if (!captachCode) {
                  setError('capthca', {
                    message: 'Please Fill out the captcha',
                  });
                  return;
                }
                setValue('capthca', true);
                clearErrors('capthca');
              }}
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              rippleEffect.create(e, 'light');
            }}
            className={clsx(
              'px-2 py-2 font-bold text-white outline-none w-52 bg-primary2 rounded-2xl focus:outline-none transition-all duration-700',
              Object.keys(errors).length > 0 && 'bg-secondary'
            )}
          >
            Send Message
          </button>
        </form>
      </CardContent>
    </>
  );
};
export default ContactScreen;
