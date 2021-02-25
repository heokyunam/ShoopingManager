import style from '../../styles/TopMenu.module.scss';

const TopMenu = () => {
    return (
    <div className={style.menu}>
        <div className={`${style.active} ${style.item}`}>요청</div>
        <div className={style.item}>쇼핑리스트</div>
        <div className={style.item}>설정</div>
    </div>
    )
}

export default TopMenu;