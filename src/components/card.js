import { Card, Col, Row } from 'antd';
import '../scss/card.scss';




const CardList = ({ menuItems, classnames, ...props }) => {
    const clickEvent = (e, i) => {
        props.changeStock(i)
    }
    return (
        <div className={classnames}>
            <Row gutter={16}>
                {menuItems?.map((res, i) => {
                    return (
                        <Col key={res.foodid} span={3}>
                            <div className={`${res.outofstock ? "instock" : "outofstock"}`}>
                                <Card bordered={false} onClick={(e) => clickEvent(e, i)}>
                                    {res.foodname}
                                </Card>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default CardList;