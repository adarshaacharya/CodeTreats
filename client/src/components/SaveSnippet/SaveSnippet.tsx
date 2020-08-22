import { FolderOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal } from 'antd';
import { useForm, useModal, useSfx } from 'hooks';
import { notify } from 'layout';
import React from 'react';
import CodeContext from '_context/code/code.context';

const SaveSnippet: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { addSnippet, code, language } = codeContext;

    const { playTing } = useSfx();
    const { showModal, closeModal, visible, setVisible } = useModal(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);

    const initialVal = { title: '' };
    const [formData, handleInput] = useForm(initialVal);
    const [form] = Form.useForm();

    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await form.validateFields();
            setConfirmLoading(true);
            setTimeout(() => {
                setVisible(false);
                setConfirmLoading(false);
                addSnippet({
                    title: formData.title!,
                    sourceCode: code,
                    language,
                });
                playTing();
                notify.dark('Code has been saved successfully 😎');
            }, 2000);
        } catch (error) {
            console.log('Validate Failed:', error);
        }
    };

    return (
        <>
            <Button onClick={showModal} size='large' icon={<FolderOutlined />}>
                Save Snippet
            </Button>

            <Modal
                title='Create a new snippet'
                visible={visible}
                onOk={onFormSubmit}
                confirmLoading={confirmLoading}
                onCancel={closeModal}
            >
                <Form form={form} autoComplete='off'>
                    <Form.Item name='title' rules={[{ required: true, message: "You can't leave title empty!" }]}>
                        <Input
                            type='text'
                            size='large'
                            name='title'
                            placeholder='Type snippet title..'
                            value={formData.title}
                            onChange={handleInput}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default SaveSnippet;

{
    /* <Modal
isOpen={modalIsOpen}
onRequestClose={closeModal}
shouldCloseOnOverlayClick={false}
shouldCloseOnEsc={true}
closeTimeoutMS={200}
contentLabel='Save New Snippet'
className='Modal'
overlayClassName='Overlay'
>
<div className='header'>
    <p className='dark'>Enter meaningful title for snippet.</p>
    <button onClick={closeModal}>❌</button>
</div>

<hr />

<div className='body'>
    <form onSubmit={onFormSubmit} autoComplete='off'>
        <input
            type='text'
            name='title'
            id='title'
            placeholder='Type snippet title..'
            required={true}
            value={formData.title}
            onChange={handleInput}
        />
    </form>
</div>

<hr />
<div className='footer'>
    <Button type='primary' onClick={onFormSubmit}>
        Save
    </Button>
    <Button danger onClick={closeModal}>
        Close
    </Button>
</div>
</Modal>

<Button size='large' onClick={openModal} icon={<FolderOutlined />}>
Save Snippet
</Button> */
}
