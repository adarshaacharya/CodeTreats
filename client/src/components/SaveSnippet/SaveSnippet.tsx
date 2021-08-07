import { FolderOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal } from 'antd';
import { useForm, useModal, useSfx } from 'hooks';
import { notify } from 'layout';
import React from 'react';
import { useCodeContext } from '_context/code/code.context';
import { useSnippetContext } from '_context/snippet/snippet.context';

const SaveSnippet: React.FC = () => {
    const { code, language } = useCodeContext();
    const { addSnippet } = useSnippetContext();

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
            console.error('Validate Failed:', error);
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
