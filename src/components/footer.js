import { Layout, Row, Col } from 'antd';
import CommonButton from './button';

const { Footer } = Layout;


const CommonFooter = ({...props}) => {
    const onStatus = (e, count) => {
        props.onStatus(e, count)
    }
    return (
        <Footer>
            <Row gutter={16}>
                <Col span={8}>
                    <CommonButton onClick={onStatus} value={0}>
                        ALL UNAVAILABLE
                    </CommonButton>
                </Col>
                <Col span={8}>
                    <CommonButton onClick={onStatus} value={1000}>
                        ALL AVAILABLE
                    </CommonButton>
                </Col>
                <Col span={8}>
                    <CommonButton>
                        APPLY
                    </CommonButton>
                </Col>
            </Row>
        </Footer>
    )
}

export default CommonFooter;