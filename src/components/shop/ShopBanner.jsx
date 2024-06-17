import ALink from "../custom-link";
import banner from './product-list/media/banner.jpg'
export default function ShopBanner( props ) {
    const { subTitle = '', title = "Riode Shop", current = "Riode Shop" } = props;

    return (
        <div className="page-header" style={ { backgroundImage: `url( ${banner} )`, backgroundColor: "#3C63A4" } }>
            {
                subTitle ? <h3 className="page-subtitle text-dark">{ subTitle }</h3> : ''
            }
            {
                title ? <h1 className="page-title text-dark">{ title }</h1> : ''
            }
            <ul className="breadcrumb">
                <li><ALink href="/"><i className="d-icon-home text-dark"></i></ALink></li>
                <li className="delimiter text-dark">/</li>
                <li className="text-dark">{ current }</li>
            </ul>
        </div>
    )
}