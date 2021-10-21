import { VscGithubInverted } from 'react-icons/vsc';
import styles from './styles.module.scss';

export function LoginBox() {
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=c9e1b4d14db243a610e1`;

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="24" />
                Entrar com Github
            </a>
        </div>
    )
}