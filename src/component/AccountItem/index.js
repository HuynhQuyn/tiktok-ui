import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/component/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpx77UG-o7dCcbr3e3t_iqiEY6MwI28q9_Gg&usqp=CAU"
                alt="Hoa"
            ></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('usernmae')}>Nguyen van a</span>
            </div>
        </div>
    );
}

export default AccountItem;
