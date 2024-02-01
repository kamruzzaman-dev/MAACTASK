import { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import { faqData } from "../../../data/faq";
const Faq = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenAccordion((prev) => (prev === index ? null : index));
    };

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "10px",
                padding: "0 80px",
                marginTop: "80px",
            }}
        >
            {faqData.map((item, index) => (
                <div
                    key={index}
                    style={{
                        margin: "10px",
                        padding: "24px",
                        background: "#fff",
                        borderRadius: "14px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                        onClick={() => toggleAccordion(index)}
                    >
                        <span style={{ fontWeight: "bold" }}>{item.title}</span>
                        <span
                            style={{
                                transform:
                                    openAccordion === index ? "rotate(90deg)" : "rotate(0deg)",
                                transition: "transform 0.3s",
                            }}
                        >
                            <RightOutlined />
                        </span>
                    </div>
                    {openAccordion === index && (
                        <div style={{ marginTop: "10px" }}>
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Faq;
