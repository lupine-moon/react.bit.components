import * as React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps {
	borderRadius?: string;
	children?: any;
	className?: string;
	color: string;
	primary?: boolean;
	style?: React.CSSProperties;
	onClick?: (event: React.FormEvent) => void;
}

const StyledButton = styled.button`
	display: inline-block;
	cursor: pointer;
	width: 11rem;
	padding: 0.5rem 0;
	margin: 0.5rem;
	background: transparent;
	color: ${(props: ButtonProps) => props.color};
	border: 1px solid ${(props: ButtonProps) => props.color};
	border-radius: ${(props: ButtonProps) => (props.borderRadius ? props.borderRadius : '0px')};
	font-size: 14px;

	:hover {
		border: 1px solid transparent;
		box-shadow: inset 10000px 0 0
			${(props: ButtonProps) =>
				props.primary ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.9)'};
		background: ${(props: ButtonProps) => props.color};
	}

	${(props: ButtonProps) =>
		props.primary &&
		css`
			background: ${props.color};
			color: white;
		`}
`;

const Button = (props: ButtonProps) => {
	return (
		<StyledButton
			className={props.className}
			style={props.style}
			onClick={props.onClick}
			{...props}
		>
			{props.children}
		</StyledButton>
	);
};

export default Button;
