/** @jsx jsx */
import { jsx } from 'theme-ui';

const Logo = (props) => (
  <svg
    viewBox="0 0 131 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M36.68 53.736C35.976 52.584 35.08 51.88 33.864 51.88H32.264C31.88 51.88 31.496 51.944 31.176 52.328C30.984 52.52 30.728 52.456 30.6 52.2C30.408 51.816 30.024 51.88 29.704 51.688C29.256 52.008 28.744 51.752 28.296 52.072C27.976 52.264 27.848 52.2 27.72 51.88C27.656 51.688 27.464 51.752 27.336 51.88C27.272 51.944 27.208 52.072 27.144 52.2C27.016 52.392 26.888 52.456 26.76 52.264C26.568 52.008 26.44 51.944 26.184 52.136C25.672 52.584 25.096 52.712 24.584 52.2C24.392 51.944 24.2 52.072 24.008 52.264C23.816 52.456 23.688 52.328 23.56 52.136C23.496 52.008 23.368 52.008 23.304 52.136C23.176 52.2 23.112 52.456 22.984 52.2C22.792 52.008 22.664 51.944 22.472 52.136C22.28 52.392 22.152 52.392 21.896 52.264C21.576 52.136 21.192 52.136 20.936 52.584C20.872 52.648 20.68 52.712 20.552 52.776C19.528 52.904 18.568 53.096 17.608 53.288C17.096 53.352 16.52 53.352 16.008 53.544C15.816 53.608 15.56 53.608 15.368 53.544C14.984 53.352 14.664 53.416 14.408 53.736C14.28 53.928 14.152 53.8 13.96 53.8C13.576 53.672 13.128 53.736 12.808 54.12C12.552 54.376 12.296 54.44 12.04 54.44C11.4 54.376 10.76 54.632 10.184 54.824C9.608 55.016 9.096 55.144 8.584 54.824C8.52 54.76 8.392 54.888 8.328 54.952C8.264 54.952 8.2 55.08 8.136 55.144C8.136 55.016 8.072 54.888 8.072 54.76C8.328 54.12 8.648 53.416 8.456 52.648C8.392 52.52 8.52 52.328 8.52 52.136C8.648 51.56 8.904 51.048 8.84 50.408C8.84 50.216 8.904 49.96 8.968 49.768C9.352 48.744 9.544 47.72 9.8 46.696C9.864 46.376 9.992 46.056 9.928 45.672C9.928 45.352 9.992 45.032 10.056 44.712C10.12 44.456 10.504 44.584 10.568 44.264C10.504 44.2 10.376 44.072 10.44 43.944C10.696 43.368 10.824 42.728 10.888 42.088C10.952 41.576 11.4 41.128 11.144 40.552C11.144 40.552 11.144 40.488 11.208 40.488C11.592 40.36 11.272 39.976 11.4 39.784C11.592 39.592 11.656 39.336 11.848 39.08C12.104 38.76 12.296 38.376 12.104 37.864C12.104 37.8 12.168 37.608 12.232 37.48C12.296 37.352 12.424 37.16 12.488 37.032L12.68 36.072C12.744 35.624 13.192 35.752 13.384 35.368C13.448 35.176 13.512 34.984 13.32 34.856C13.448 34.408 13.896 33.896 13.32 33.448C13.256 33.384 13.256 33.32 13.32 33.192C13.576 32.872 13.64 32.424 13.896 32.168C14.216 31.848 14.216 31.464 14.088 31.016C14.088 30.824 14.088 30.824 14.344 30.76C14.472 30.696 14.664 30.696 14.472 30.44C14.216 30.056 14.216 29.864 14.408 29.672C14.6 29.352 14.92 29.032 15.112 28.776C15.176 28.648 15.304 28.392 15.24 28.392C14.792 28.008 15.496 27.816 15.368 27.56C15.24 27.048 15.688 26.728 15.752 26.28C16.136 25.96 16.2 25.384 16.392 24.872C16.584 24.04 16.968 23.336 17.224 22.568C17.288 22.44 17.352 22.312 17.48 22.184C17.48 22.696 17.352 23.144 17.224 23.656L16.456 26.408C16.392 26.6 16.52 26.856 16.648 26.856C16.776 26.856 16.904 26.728 16.968 26.536C17.032 26.408 17.096 26.216 17.096 26.024C17.16 25.192 17.352 24.488 17.736 23.848C17.8 23.784 18.184 22.12 18.12 21.992C18.056 21.736 18.056 21.544 18.248 21.288C18.504 20.776 18.696 20.2 18.952 19.688C19.016 19.496 18.888 19.432 18.76 19.432C18.632 19.368 18.376 19.496 18.248 19.304C18.44 19.24 18.696 19.24 18.888 19.112C19.144 18.984 19.336 18.792 19.336 18.472C19.272 18.216 19.208 18.024 18.952 18.024C18.76 17.96 18.696 17.832 18.824 17.64C19.08 17.192 19.208 16.616 19.592 16.232C19.848 15.976 19.848 15.592 19.976 15.272C20.04 15.208 19.976 15.08 19.912 15.016C19.784 14.888 19.72 14.76 19.912 14.632C20.168 14.312 20.424 13.992 20.552 13.608C21.064 12.264 21.768 10.984 22.344 9.704C22.728 8.936 23.176 8.168 23.432 7.4C23.624 6.504 24.008 5.8 24.456 5.032C25.032 3.88 25.032 3.88 24.84 2.6C24.84 2.28 24.712 2.024 24.52 1.832C24.2 1.512 23.88 1.192 23.624 0.807999C23.368 0.487999 22.984 0.359997 22.664 0.231998C22.408 0.103996 22.216 0.0399971 21.96 0.167999C21.704 0.231998 21.704 0.551998 21.64 0.807999C21.576 0.999996 21.448 1.128 21.384 1.256C20.936 1.96 20.296 2.472 19.912 3.24C19.784 3.432 19.592 3.56 19.656 3.944C19.72 4.008 19.592 4.2 19.528 4.264L18.888 5.224C18.824 5.096 18.76 4.968 18.696 4.904C18.568 4.904 18.44 4.968 18.376 5.032C17.672 5.928 17.032 6.952 17.096 8.296C17.096 8.424 17.096 8.552 17.032 8.68C16.584 9.512 16.2 10.344 15.88 11.24C15.752 11.688 15.368 11.944 15.816 12.392C15.88 12.456 15.816 12.648 15.752 12.776C15.688 12.968 15.624 13.224 15.496 13.352C15.112 13.608 15.24 14.12 14.984 14.44C14.664 14.76 14.6 15.144 14.6 15.528L14.408 15.912C13.704 17.576 13 19.24 12.552 21.032C12.36 21.544 12.104 21.992 11.912 22.504C11.72 22.952 11.656 23.4 11.528 23.784C11.4 24.232 11.208 24.68 11.144 25.128C11.08 25.64 10.824 25.96 10.696 26.344C10.504 27.24 10.248 28.136 9.8 28.904C9.736 29.032 9.672 29.224 9.672 29.416C9.672 29.928 9.48 30.312 9.288 30.696C9.032 31.08 9.16 31.592 8.84 31.976C8.648 32.168 8.584 32.424 8.712 32.68C8.84 33 8.84 33.384 8.648 33.64C8.392 33.896 8.264 34.216 8.264 34.6C8.264 34.856 8.136 34.984 8.008 35.176C7.816 35.304 7.752 35.496 7.624 35.688C7.496 35.944 7.56 36.136 7.752 36.264C7.432 36.648 7.432 37.224 7.432 37.672C7.496 38.504 6.728 38.952 6.856 39.72C6.856 39.848 6.792 39.976 6.728 40.104L6.536 40.296C6.216 40.488 6.152 40.808 6.216 41.192C6.28 41.576 6.216 41.96 6.216 42.28C5.832 42.536 6.024 42.92 6.024 43.24C6.088 43.56 5.96 43.88 5.768 44.136C5.64 44.328 5.512 44.584 5.576 44.776C5.832 45.288 5.448 45.608 5.384 45.992C5.32 46.504 5.192 47.016 5 47.464C4.808 48.104 4.616 48.744 4.616 49.448C4.616 49.832 4.488 50.216 4.424 50.536C4.296 51.048 4.04 51.496 3.976 52.008C3.976 52.648 3.848 53.352 3.784 53.992C3.784 54.12 3.848 54.312 3.784 54.376C3.208 55.464 2.952 56.68 2.632 57.832C2.568 58.152 2.376 58.28 2.184 58.408C1.928 58.664 1.608 58.6 1.288 58.664C0.584 58.984 0.456 59.304 0.584 60.136C0.584 60.456 0.712 60.712 0.648 61.096C0.584 61.672 0.776 62.248 0.84 62.824C0.84 63.336 1.096 63.592 1.416 63.912C1.672 64.168 1.928 64.104 2.248 63.912C2.376 63.848 2.568 63.848 2.696 63.848C3.4 64.168 4.104 63.912 4.744 64.296C4.872 64.36 5.064 64.36 5.192 64.36C5.704 64.36 6.152 64.232 6.472 63.784C6.792 63.4 7.176 62.952 7.176 62.376C7.24 61.672 7.624 61.416 8.072 61.224C8.712 60.968 9.288 60.456 10.056 60.52C10.184 60.52 10.312 60.328 10.44 60.264C10.632 60.136 10.888 59.88 11.016 59.88C11.464 59.944 11.72 59.496 12.104 59.432C12.488 59.368 12.872 59.24 13.256 59.176L14.472 58.792C14.728 58.28 15.24 58.664 15.56 58.472C15.816 58.6 16.008 58.472 16.2 58.408L18.248 58.024C18.888 57.96 19.528 57.896 20.168 57.768C21.256 57.576 22.344 57.256 23.432 57.192C23.56 57.192 23.752 57.256 23.88 57.192C24.328 56.936 24.776 57.064 25.224 56.936C25.736 56.808 26.184 56.744 26.632 56.936C26.888 57 27.08 56.936 27.336 56.808C27.528 56.68 27.72 56.68 27.976 56.68C29.768 56.872 31.56 56.488 33.288 56.36C33.416 56.36 33.48 56.296 33.416 56.168L33.224 55.976C33.224 55.912 33.288 55.912 33.352 55.912C34.056 55.912 34.824 55.784 35.464 56.104C36.04 56.424 36.36 56.104 36.552 55.336C36.616 55.08 36.744 54.888 36.744 54.632C36.872 54.312 36.808 54.056 36.68 53.736ZM17.672 21.8V21.992C17.608 22.056 17.608 22.056 17.544 22.12V21.928C17.544 21.864 17.608 21.864 17.672 21.8ZM16.2 24.232V24.296L16.136 24.232H16.2ZM16.456 28.2C16.456 28.136 16.456 28.136 16.456 28.072L16.392 28.008C16.072 28.008 15.688 28.328 15.624 28.712C15.56 28.776 15.624 28.84 15.688 28.904C15.752 29.096 15.88 29.032 15.944 28.968L16.456 28.2ZM15.944 29.736L15.88 29.672C15.432 29.736 15.24 30.184 14.92 30.376V30.568C14.984 30.632 14.984 30.632 14.984 30.632C15.368 30.44 15.752 30.248 15.944 29.736ZM15.112 31.912C15.112 31.976 15.048 31.976 14.984 31.976C14.856 32.168 14.728 32.424 14.792 32.68C14.792 32.744 14.856 32.808 14.92 32.808C15.24 32.744 15.368 32.296 15.176 31.976C15.176 31.976 15.112 31.976 15.112 31.912ZM14.536 33.384C14.408 33.384 14.28 33.576 14.28 33.768C14.28 33.896 14.408 34.024 14.536 33.96C14.728 33.96 14.792 33.768 14.728 33.576C14.728 33.448 14.728 33.32 14.536 33.384ZM13.064 34.92C13.128 34.92 13.192 34.92 13.256 34.92L13.128 35.048C13.064 35.112 13 35.048 13 34.984L13.064 34.92ZM10.248 39.144C10.248 39.272 10.312 39.336 10.248 39.4C10.248 39.464 10.184 39.528 10.12 39.528C10.12 39.464 10.12 39.4 10.184 39.336C10.184 39.272 10.248 39.208 10.248 39.144ZM10.12 39.592C10.056 39.784 10.056 39.912 10.056 40.104L9.992 40.168C9.928 40.104 9.928 40.04 9.928 39.976C9.928 39.784 9.928 39.656 10.12 39.592ZM12.68 40.872C12.744 40.744 12.744 40.68 12.744 40.616C12.808 40.616 12.744 40.552 12.744 40.488C12.68 40.552 12.616 40.616 12.616 40.68C12.616 40.744 12.68 40.808 12.68 40.872ZM12.296 41.832C12.04 41.832 11.784 42.216 11.848 42.472C11.912 42.536 11.912 42.536 11.912 42.6C12.168 42.6 12.488 42.216 12.424 41.96C12.424 41.896 12.36 41.896 12.296 41.832ZM10.696 44.136L10.632 44.2C10.696 44.2 10.696 44.136 10.696 44.136ZM11.336 44.968H11.4L11.336 44.904V44.968ZM10.312 49.448C10.312 49.576 10.376 49.704 10.504 49.64C10.504 49.64 10.568 49.512 10.568 49.448C10.632 49.256 10.568 49.192 10.504 49.064C10.44 49.192 10.312 49.32 10.312 49.448ZM9.992 51.368C10.056 51.368 10.056 51.368 10.12 51.304C10.12 51.304 10.12 51.304 10.12 51.24H9.992C9.928 51.24 9.928 51.304 9.992 51.368ZM31.304 55.976L31.24 56.04C31.112 55.976 31.112 55.976 31.176 55.912C31.24 55.912 31.24 55.912 31.304 55.912V55.976ZM2.44 57C2.568 56.68 2.76 56.424 2.76 56.104C2.696 56.04 2.696 55.976 2.696 55.976H2.504C2.312 56.232 2.248 56.552 2.248 56.872C2.312 56.936 2.312 57 2.376 57.064L2.44 57ZM51.425 30.824C50.785 30.248 50.401 30.312 49.697 30.568C48.993 30.888 48.417 31.336 47.841 31.848C47.137 32.488 46.561 33 45.985 33.896C45.281 34.856 44.385 35.688 43.745 36.776C43.745 36.776 42.785 37.864 42.785 38.056C42.785 38.312 42.337 38.312 42.401 38.568C42.145 39.016 41.697 39.336 41.633 39.848C41.633 39.912 41.569 39.912 41.505 39.976C41.249 40.232 41.057 40.552 40.801 40.872C40.417 41.32 40.161 41.896 39.713 42.344C39.137 42.856 38.241 43.816 37.537 44.52C36.641 45.48 35.745 46.568 34.721 47.016C34.657 47.016 34.209 47.208 33.633 47.272C33.569 47.272 33.377 47.272 33.313 47.208C32.673 46.952 32.161 46.632 31.841 46.056C31.329 45.16 30.817 44.264 31.073 43.24C31.073 43.176 30.945 43.048 30.945 42.984C30.945 42.856 31.073 42.664 31.201 42.728C31.585 42.856 31.841 42.472 32.225 42.536C33.057 42.344 33.825 42.088 34.465 41.576C35.873 40.424 37.281 39.336 38.305 37.928C38.689 37.416 39.073 36.904 39.393 36.328C39.521 36.072 39.713 35.816 39.713 35.496C39.713 35.24 40.161 34.472 40.289 34.28C40.545 33.768 40.801 33.256 40.865 32.68C41.057 31.848 41.121 30.952 41.121 30.12C41.185 28.968 40.865 27.752 40.609 26.664C40.481 26.28 40.353 26.088 40.161 25.832C39.841 25.448 39.649 25.064 39.265 24.872C38.817 24.68 38.177 24.808 37.729 24.744C37.473 24.68 37.153 24.616 36.897 24.616C36.449 24.616 36.257 24.872 35.873 25C35.617 25.064 35.553 24.936 35.361 24.936C35.233 25 35.041 25.128 34.849 25.192C34.785 25.256 34.657 25.192 34.593 25.192C34.209 25.448 33.889 25.768 33.633 26.216C33.313 26.792 32.993 27.304 32.545 27.816C32.289 28.2 31.905 28.52 31.713 28.904C31.137 29.736 30.625 30.696 30.049 31.592C29.857 31.912 29.729 32.296 29.601 32.68C29.601 32.872 29.537 33.064 29.281 33.128C29.153 33.192 29.089 33.256 29.089 33.32C29.089 33.704 28.897 34.024 28.897 34.408C28.897 34.792 28.897 35.048 28.449 35.176C28.385 35.24 28.385 35.304 28.385 35.304C28.321 35.688 28.065 35.944 28.001 36.264C28.001 36.52 28.001 36.776 27.809 37.032C27.617 37.224 27.617 37.416 27.809 37.672C27.873 37.8 27.873 37.928 27.809 37.992C27.745 38.12 27.617 38.184 27.553 38.312C27.169 38.824 27.169 38.952 27.233 39.72C27.233 39.912 27.297 40.168 27.169 40.296C26.913 40.68 26.977 41.128 26.849 41.512C26.721 41.832 26.721 42.152 27.233 42.344V42.472C26.849 42.408 26.913 42.6 26.913 42.792C26.977 43.56 27.233 44.328 27.425 45.096C27.489 45.352 27.681 45.608 28.065 45.608C28.193 45.672 28.193 45.8 28.257 45.864C28.193 45.864 28.129 45.864 28.065 45.928C28.065 46.184 28.129 46.44 28.385 46.632C28.577 46.824 28.769 47.016 29.025 47.144C29.153 47.272 29.281 47.4 29.281 47.592C29.345 47.912 29.601 48.168 29.985 48.296C29.985 48.36 30.049 48.36 30.113 48.424C30.625 48.872 31.329 49.128 32.033 49.32C32.545 49.448 33.057 49.512 33.569 49.576C34.785 49.384 36.001 49.32 37.089 48.872C37.793 48.616 38.625 48.232 39.329 47.72C39.457 47.72 39.521 47.656 39.649 47.656C39.649 47.592 39.713 47.592 39.713 47.592C39.777 47.592 39.841 47.528 39.841 47.528H39.905C40.161 47.272 40.481 47.08 40.673 46.76C40.673 46.696 40.737 46.632 40.801 46.568C40.865 46.504 40.993 46.44 41.121 46.44C41.313 46.376 41.377 46.248 41.441 46.12C41.633 45.928 41.697 45.544 42.081 45.416C42.145 45.416 42.145 45.352 42.145 45.288C41.953 44.968 42.337 44.84 42.465 44.648C42.721 44.328 42.977 44.072 43.169 43.752C43.233 43.496 43.425 43.368 43.681 43.304C43.809 43.304 43.873 43.176 43.809 43.048C43.745 42.792 43.809 42.664 44.001 42.536C44.193 42.344 44.449 42.152 44.385 41.896C44.385 41.768 44.513 41.704 44.577 41.704C44.833 41.768 44.961 41.576 45.089 41.384C45.217 41.128 45.473 40.936 45.473 40.68C45.537 40.296 47.073 37.928 47.265 37.608C47.393 37.288 47.521 37.032 47.841 36.904C48.161 36.776 48.161 36.584 48.033 36.264C47.969 36.2 47.841 36.136 47.969 36.008C48.225 35.688 48.417 35.368 48.673 34.984C48.737 34.92 48.801 34.92 48.865 34.92C48.801 34.984 48.801 35.048 48.737 35.176C48.737 35.24 48.673 35.304 48.801 35.368C48.865 35.432 48.993 35.368 48.993 35.304C49.505 34.6 49.953 33.96 50.465 33.32C50.913 32.744 51.233 32.232 51.553 31.592C51.681 31.272 51.681 31.016 51.425 30.824ZM31.137 39.656C31.329 38.824 31.649 38.12 31.969 37.352C31.969 37.224 32.033 37.16 32.033 37.032C31.969 36.648 32.161 36.328 32.289 36.008L33.057 34.024C33.377 33.256 33.761 32.552 34.145 31.848C34.401 31.336 34.785 30.824 34.977 30.248C35.297 29.416 36.065 28.776 36.449 28.008C36.577 27.816 36.705 27.688 36.897 27.56C36.961 27.496 37.089 27.432 37.217 27.496C37.921 27.816 37.921 27.816 38.433 28.456C38.625 28.712 38.689 28.968 38.689 29.224C38.625 29.544 38.561 29.864 38.433 30.184C38.305 30.504 38.433 30.888 38.241 31.208C38.049 31.464 37.921 31.784 37.793 32.104C37.025 33.896 35.745 36.136 34.593 37.736C33.953 38.632 33.121 39.336 32.289 40.104C32.097 40.296 31.841 40.36 31.585 40.488C31.265 40.552 31.137 40.552 31.073 40.168C31.137 39.976 31.073 39.784 31.137 39.656ZM30.113 33.576C30.113 33.64 30.113 33.704 30.049 33.576V33.512H30.113V33.576ZM29.793 34.216C29.729 34.472 29.729 34.664 29.473 34.792H29.345C29.345 34.728 29.281 34.728 29.281 34.728C29.473 34.536 29.601 34.344 29.729 34.152H29.793C29.793 34.152 29.857 34.216 29.793 34.216ZM29.217 35.688C29.217 35.752 29.153 35.752 29.153 35.816V35.688C29.153 35.624 29.217 35.624 29.217 35.56C29.217 35.624 29.281 35.688 29.217 35.688ZM29.025 35.88C29.025 35.88 29.025 35.816 29.089 35.816C29.089 35.816 29.089 35.88 29.025 35.88ZM28.577 36.712V36.648H28.641L28.577 36.712ZM28.129 38.952C28.129 38.952 28.193 38.888 28.193 38.824C28.193 38.824 28.257 38.824 28.257 38.76C28.321 38.824 28.321 38.888 28.321 38.952V39.08C28.257 39.08 28.193 39.144 28.193 39.08C28.129 39.08 28.065 39.016 28.129 38.952ZM28.129 40.936C28.001 41.512 27.937 42.024 28.001 42.6V42.984C28.001 43.048 27.937 43.048 27.873 43.112C27.809 43.112 27.809 43.112 27.745 42.984C27.745 42.856 27.745 42.664 27.681 42.408C27.681 42.216 27.681 41.96 27.745 41.704C27.873 41.256 27.873 40.872 27.937 40.424C28.001 40.232 27.553 40.296 27.745 40.104C27.873 39.976 27.937 39.848 28.001 39.72C28.065 39.656 28.065 39.592 28.129 39.592C28.257 39.592 28.257 39.72 28.257 39.784C28.193 40.168 28.193 40.552 28.129 40.936ZM27.297 41.32C27.233 41.32 27.233 41.32 27.233 41.192C27.297 41.192 27.297 41.192 27.297 41.256V41.32ZM27.105 41.768V41.704C27.169 41.704 27.169 41.704 27.169 41.768C27.169 41.832 27.105 41.832 27.105 41.768ZM28.321 46.12C28.321 46.12 28.321 46.056 28.257 46.056V45.928C28.321 45.928 28.321 45.992 28.385 45.992C28.385 46.056 28.385 46.12 28.321 46.12ZM52.773 49.64C53.349 49.576 53.861 49.448 54.373 49.064C55.269 48.488 55.973 47.784 56.421 46.824C56.805 45.992 57.189 45.224 57.509 44.392C57.765 43.816 58.149 43.304 58.405 42.728C58.725 41.832 59.045 40.936 59.301 40.104C59.429 39.656 59.557 39.272 59.813 38.888L60.197 38.056C60.197 38.056 60.325 37.672 60.453 37.48C60.709 37.096 60.773 36.776 60.965 36.456C61.093 36.2 61.157 36.008 61.285 35.816C61.605 36.136 61.989 36.392 62.373 36.648C62.565 36.776 62.757 36.904 63.013 36.84C63.525 37.032 64.037 36.712 64.549 36.392C65.893 35.56 67.173 33.768 67.813 32.36C68.005 31.848 68.709 31.336 68.645 30.696C68.389 30.696 68.197 30.504 68.005 30.504C67.685 30.504 67.365 30.952 67.109 31.144C66.213 32.04 65.509 33.448 64.485 34.216C64.293 34.408 64.101 34.408 63.909 34.536C63.589 34.6 63.461 34.216 63.141 34.344C63.077 34.216 62.949 34.088 62.821 33.896C62.501 33.192 62.693 33.384 62.501 32.488C62.437 32.104 62.309 31.592 62.053 31.464C61.797 31.336 60.965 30.696 60.645 30.76C60.261 30.888 59.365 31.144 59.109 31.72L58.341 33.256C58.149 33.64 57.957 33.96 57.893 34.152C57.829 34.152 57.829 34.216 57.829 34.216C57.445 34.92 57.125 35.624 56.869 36.328C56.613 36.968 56.293 37.608 55.973 38.248L54.629 41.448C54.181 42.536 53.413 44.2 52.965 45.288C52.773 45.736 52.581 46.568 52.005 46.76C51.877 46.824 51.621 46.696 51.557 46.504L51.365 45.864C51.173 43.56 51.557 40.616 51.813 38.376C51.813 38.056 51.941 37.736 52.005 37.416C52.069 37.224 52.133 37.096 52.133 36.968C52.133 35.624 52.581 34.408 52.837 33.128C52.965 32.488 53.157 31.848 53.285 31.208C53.349 31.144 53.413 31.016 53.349 30.888L53.541 30.184C53.989 29.16 53.797 29.352 54.117 28.968C54.373 28.648 54.437 28.2 54.629 27.816C55.077 27.048 55.333 26.216 55.845 25.448C55.973 25.256 56.101 25 56.229 24.744C56.293 24.616 56.357 24.552 56.549 24.552C56.741 24.552 56.741 24.424 56.741 24.296C56.549 23.272 56.293 22.312 55.653 21.48C55.141 20.776 54.565 20.136 53.733 19.752C53.477 19.688 52.709 19.816 52.517 20.008C52.453 20.136 52.389 20.264 52.389 20.392C52.389 21.096 52.133 21.8 51.685 22.44C51.429 22.76 51.493 23.272 51.173 23.592C50.917 24.552 50.405 25.448 50.149 26.472C50.021 27.176 49.509 28.904 49.253 29.672C49.125 30.056 49.061 30.376 48.997 30.76L48.869 30.952C48.869 31.016 48.869 31.08 48.805 31.144C48.613 31.72 48.421 32.424 48.293 33C47.973 34.28 47.717 35.56 47.525 36.84C47.397 37.352 47.333 37.8 47.269 38.312C47.141 39.72 47.205 41.192 47.269 42.664C47.269 44.136 47.717 45.48 48.293 46.824C48.613 47.592 49.061 48.168 49.829 48.552C50.469 48.808 51.109 49.128 51.749 49.448C52.069 49.64 52.389 49.64 52.773 49.64ZM73.8895 19.112C74.9135 20.584 76.8335 18.664 76.6415 17.512C76.5775 17.064 76.3855 16.616 76.0015 16.36C75.3615 15.912 74.2735 15.784 73.6975 16.36C73.5055 16.488 73.4415 16.616 73.3135 16.808C73.0575 17.512 73.5055 18.536 73.8895 19.112ZM70.3055 49.448C70.4335 49.384 70.6895 49.384 70.8175 49.384C71.1375 49.32 71.4575 49.256 71.6495 49.128C72.6095 48.552 73.4415 47.976 74.0175 47.016C74.4655 46.376 75.0415 45.736 75.6175 45.16C75.8735 44.776 76.3855 44.52 76.5135 44.008C76.5135 43.88 76.7055 43.816 76.7695 43.752C76.9615 43.624 77.1535 43.432 77.1535 43.176C77.2175 42.984 77.3455 42.792 77.5375 42.664C77.6655 42.472 77.8575 42.28 77.8575 42.088C77.9855 41.64 77.9855 41.192 78.5615 40.936C78.6255 40.936 78.6255 40.872 78.6255 40.808C78.6895 40.552 78.6895 40.232 78.8175 39.976C79.0095 39.656 79.3295 39.464 79.4575 39.208C79.5855 38.76 79.8415 38.44 80.1615 38.056C80.2895 37.928 80.3535 37.736 80.2895 37.544C80.1615 37.096 80.2895 36.776 80.5455 36.456C80.7375 36.2 80.8655 35.944 80.9935 35.688C81.0575 35.56 81.1215 35.496 81.3135 35.432C81.8255 35.304 81.8255 35.304 81.7615 34.792C81.7615 34.6 81.8255 34.472 81.8895 34.28C82.0175 34.216 82.0815 34.152 82.2735 34.216C82.5295 34.216 82.5935 34.216 82.5935 34.088C82.5935 33.96 82.5295 33.896 82.4015 33.832C82.3375 33.832 82.3375 33.768 82.3375 33.704C82.4015 33.64 82.4655 33.704 82.5295 33.704C82.8495 33.768 83.0415 33.64 83.1055 33.448C83.1055 33.32 83.1695 33.256 83.1055 33.128C82.8495 32.36 84.3855 31.528 83.4895 30.696C83.1695 30.376 82.7215 30.44 82.2095 30.44C81.4415 30.44 80.6095 30.568 79.9055 30.888C79.3295 31.208 78.5615 31.976 78.6895 32.616C78.6895 32.808 78.4975 32.872 78.3695 32.936C77.8575 33.32 77.1535 33.704 77.2175 34.472C77.2175 34.6 77.0895 34.664 77.0255 34.728C76.8335 34.792 76.7695 35.048 76.7055 35.176C75.9375 36.52 75.2975 37.864 74.2735 39.08C74.2095 39.208 74.0815 39.336 74.0175 39.528C73.9535 39.848 73.6335 40.104 73.3775 40.296C73.0575 40.552 73.1215 41 72.8655 41.256L71.1375 43.368C70.4335 44.264 69.6015 45.032 68.8335 45.8C68.7695 45.864 68.7055 45.8 68.6415 45.8C68.5775 45.736 68.5135 45.672 68.5135 45.608C68.5775 45.48 68.7695 45.288 68.7055 45.096C68.7055 44.648 68.7695 44.264 68.8335 43.88C68.8975 43.624 68.7695 43.432 68.8335 43.176C68.9615 42.984 68.9615 42.664 69.0255 42.472C68.7055 42.088 69.2175 42.088 69.2815 41.896C69.2815 41.832 69.3455 41.768 69.2815 41.704C69.1535 41.384 69.3455 41.128 69.4735 40.808C69.6015 40.488 69.4095 40.168 69.6015 39.848C69.6655 39.656 69.5375 39.528 69.3455 39.464H69.0895C69.1535 39.4 69.1535 39.4 69.2175 39.4C69.4735 39.4 69.6015 39.208 69.6655 39.08C70.0495 38.568 70.1135 37.992 70.3055 37.48C70.3695 37.352 69.9855 37.352 70.1775 37.16C70.2415 37.096 70.4335 37.032 70.3695 36.904C70.3055 36.712 70.1775 36.584 70.4335 36.52C70.5615 36.456 70.6255 36.264 70.6255 36.072C70.6255 35.688 70.8815 35.368 71.0735 35.048C71.2015 34.856 71.2655 34.664 71.2015 34.472C71.0095 34.088 71.6495 33.832 71.3935 33.384C71.3295 33.32 71.4575 33.192 71.5215 33.128C71.6495 33 71.7775 32.808 71.7775 32.616C71.9055 32.232 72.1615 31.848 72.1615 31.464C72.6095 31.144 72.4815 30.632 72.6735 30.184C72.8015 29.992 72.8655 29.736 72.9935 29.544C73.1855 29.16 73.4415 28.776 73.5695 28.392C73.7615 28.072 73.6975 27.688 73.3775 27.368C73.1855 27.24 72.9935 27.048 72.8015 26.856C72.4815 26.408 72.0975 26.024 71.4575 26.024C71.3295 26.024 71.2015 25.896 71.1375 25.896C70.3055 25.576 70.1775 25.64 69.7935 26.216L69.6015 26.664C69.6015 26.92 69.4735 27.176 69.2815 27.368C69.0895 27.624 68.9615 27.88 68.8975 28.264C68.8335 28.52 68.7055 28.776 68.5775 29.032C68.1935 29.992 67.8095 30.888 67.4255 31.848L66.4655 34.472C66.3375 34.728 66.1455 34.984 66.1455 35.24C66.0175 36.008 65.5695 36.648 65.5055 37.416C65.1215 37.864 65.3135 38.504 64.9295 39.016C64.9295 39.592 64.6735 40.168 64.6095 40.744C64.5455 41 64.6095 41.192 64.4175 41.32C64.0975 41.448 64.4815 41.768 64.2895 41.896C64.0335 42.152 64.0335 42.344 64.2895 42.6C64.1615 42.856 64.6095 43.24 64.1615 43.432C64.1615 43.432 64.0975 43.56 64.1615 43.56C64.3535 43.816 64.2895 44.072 64.1615 44.328C64.4175 44.712 64.2255 45.16 64.2895 45.544C64.3535 45.8 64.3535 46.056 64.6735 46.184C64.8015 46.248 64.7375 46.312 64.6735 46.376C64.4175 46.888 64.6095 47.272 65.0575 47.656C65.3135 47.784 65.5055 48.04 65.6975 48.104C66.1455 48.296 66.4655 48.616 66.8495 48.872C67.0415 49.064 67.2335 49.256 67.4895 49.32C68.4495 49.448 69.4095 49.896 70.3055 49.448ZM64.6735 44.072V44.008H64.7375L64.6735 44.072ZM80.186 48.744C81.466 49.064 82.746 49.192 83.962 48.616C84.73 48.232 85.434 47.912 86.074 47.336C86.33 47.208 86.522 47.016 86.714 46.824C86.906 46.568 87.098 46.44 87.354 46.248C87.802 45.992 88.186 45.672 88.57 45.288C88.826 45.032 89.082 44.712 89.338 44.52C90.362 43.752 90.874 42.6 91.578 41.64C91.642 41.512 91.642 41.448 91.642 41.32C91.77 40.936 91.834 40.552 91.962 40.168C92.026 39.976 92.09 39.72 92.026 39.528C91.834 38.952 91.962 38.376 91.706 37.864C91.642 37.672 91.706 37.48 91.898 37.352L93.626 36.584C94.842 36.136 96.122 35.88 97.274 35.112C97.658 34.856 97.53 34.664 97.786 34.344C97.978 34.152 98.106 34.344 98.042 33.96C97.85 33.384 95.482 33.704 95.034 33.768C93.434 33.96 91.962 34.408 90.49 34.856C90.17 34.984 89.85 35.112 89.466 35.176C89.082 35.24 88.762 34.856 88.442 34.664C87.738 34.344 87.034 33.96 86.266 33.768C85.498 33.512 84.73 33.384 83.962 33.256C83.77 33.192 83.642 33.192 83.514 33.128C83.322 33.064 83.322 32.872 83.386 32.808L84.538 31.72C85.05 31.144 85.69 30.696 86.202 30.184C87.418 29.416 88.57 28.584 89.85 28.072C90.042 28.008 90.234 27.88 90.426 27.816C91.002 27.432 91.642 27.176 92.346 27.112C92.666 27.112 92.922 26.728 92.794 26.408C92.794 26.344 92.73 26.216 92.73 26.216C92.538 25.96 92.41 25.704 92.154 25.512C91.77 25.256 91.322 25.064 91.002 24.744C90.298 24.104 89.338 24.168 88.634 23.592H88.442C88.186 23.656 87.93 23.528 87.674 23.464C87.098 23.272 86.586 23.208 86.138 23.72C86.01 23.848 85.882 23.912 85.754 23.912C84.282 24.744 83.002 25.832 81.786 26.984C81.146 27.56 80.634 28.264 80.058 28.904C79.866 29.096 79.738 29.352 79.674 29.608C79.482 29.928 79.354 30.312 79.226 30.696C79.034 31.208 78.778 31.656 78.714 32.168C78.586 33.256 79.098 34.152 79.738 34.92C80.186 35.496 80.762 35.88 81.53 36.072C81.658 36.072 81.85 36.136 81.978 36.2C82.362 36.392 82.746 36.456 83.13 36.456C83.45 36.456 83.77 36.52 84.154 36.52H84.986C85.242 36.52 85.498 36.584 85.69 36.648C85.818 36.776 85.818 36.904 85.69 36.968L85.562 37.096C84.282 37.8 83.002 38.44 81.914 39.336C80.506 40.168 79.418 41.256 78.266 42.408C77.946 42.792 77.626 43.176 77.306 43.624L77.178 43.752C77.37 44.328 77.05 44.84 77.178 45.352C77.178 45.48 77.242 45.672 77.37 45.8C78.01 46.568 78.586 47.528 79.354 48.232C79.61 48.488 79.866 48.616 80.186 48.744ZM81.85 44.264C81.594 44.264 81.53 44.136 81.658 43.944C81.722 43.816 81.786 43.624 81.914 43.56C82.49 42.92 83.066 42.344 83.77 41.896C83.962 41.832 84.154 41.64 84.346 41.512C84.858 41.128 85.37 40.808 85.882 40.488C86.202 40.296 86.522 40.04 86.842 39.784C86.842 39.72 86.97 39.784 86.97 39.784C87.034 39.848 87.034 39.912 87.034 39.976C86.842 40.424 86.522 40.744 86.202 41.064C85.242 42.28 84.154 43.304 82.746 44.008C82.49 44.2 82.17 44.264 81.85 44.264ZM130.062 20.776C129.871 20.328 128.847 19.688 128.399 19.688C127.823 19.688 127.183 19.624 126.607 19.624C126.159 19.688 125.775 19.88 125.519 20.328C125.135 21.032 124.623 21.672 124.047 22.184C123.855 22.376 123.727 22.504 123.599 22.696C123.407 22.952 123.343 23.208 123.151 23.4C122.959 23.592 122.959 23.912 122.639 24.104C122.511 24.232 122.447 24.552 122.319 24.808C122.255 25 122.191 25.128 121.999 25.256C121.551 25.576 121.359 26.024 121.167 26.536L120.975 26.984C120.719 27.432 120.271 27.752 120.079 28.264C120.015 28.328 119.951 28.456 119.887 28.456C119.375 28.84 119.375 29.416 119.119 29.928C119.247 30.376 118.863 30.696 118.671 31.016C118.543 31.144 118.351 31.208 118.351 31.464C118.287 31.784 118.159 32.04 117.967 32.36C117.775 32.616 117.711 33 117.519 33.256C117.263 33.576 117.071 33.96 116.878 34.28C116.303 35.432 115.727 36.584 115.023 37.672C114.51 38.312 114.127 39.08 113.551 39.72C113.615 39.272 113.487 38.76 113.615 38.312C113.807 37.8 113.679 37.288 113.743 36.84C113.871 36.584 113.935 36.264 113.935 35.944C114.127 34.472 114.319 33.064 114.767 31.592L115.151 30.376C115.535 29.288 115.919 28.2 116.367 27.176C116.559 26.6 116.559 26.088 116.559 25.512L116.367 24.744C116.239 23.912 115.791 23.528 114.958 23.464C114.639 23.4 114.319 23.4 113.999 23.272C113.743 23.208 113.423 23.208 113.231 23.4C113.103 23.592 112.847 23.464 112.783 23.656C112.591 23.912 112.335 23.784 112.143 23.848C111.695 24.04 111.247 24.232 111.311 24.808C111.375 25 111.183 25.128 111.055 25.256C110.735 25.576 110.159 25.832 110.095 26.408L109.967 26.536C109.327 26.856 109.007 27.432 108.623 27.944C108.431 28.328 108.175 28.584 107.983 28.968C107.919 29.096 107.855 29.288 107.727 29.352C107.151 29.736 106.767 30.376 106.447 30.952C106.062 31.656 105.615 32.232 105.103 32.808C104.783 33.128 104.463 33.448 104.207 33.768C104.079 33.896 104.015 33.96 103.951 34.088C103.759 34.792 103.119 35.88 102.607 36.264C102.351 36.456 102.223 36.648 102.159 36.968C102.159 37.032 102.095 37.224 101.967 37.288C101.519 37.48 101.327 37.928 101.071 38.312C100.879 38.568 100.687 38.76 100.431 39.208C100.495 38.44 100.495 37.8 100.559 37.224C100.559 36.968 100.623 36.712 100.687 36.456C100.687 36.2 100.687 35.88 100.879 35.688C101.071 35.432 100.879 35.176 101.007 34.92C101.199 34.344 101.327 33.704 101.583 33.064C101.839 32.04 102.671 29.352 102.991 28.328C103.247 28.2 103.247 28.008 103.119 27.752C102.863 26.856 102.863 26.856 101.903 26.472C101.647 26.344 101.455 26.28 101.135 26.216C100.879 26.216 100.623 26.152 100.431 25.96C100.174 25.768 99.8545 25.768 99.5985 25.832C99.4065 25.896 99.2785 25.96 99.2785 26.088C99.2785 26.408 99.2145 26.664 99.0865 26.984C98.7025 27.944 98.2545 28.904 97.8705 29.864C97.7425 30.376 97.2305 30.76 97.5505 31.4C97.6145 31.464 97.4865 31.592 97.4865 31.656C97.3585 31.976 97.3585 32.296 97.1665 32.488C96.9745 32.808 97.1025 33.128 96.9745 33.448C96.9745 33.512 96.9105 33.576 96.9105 33.64C96.7825 33.768 96.7825 33.896 96.7185 34.024C96.7185 34.088 96.7185 34.088 96.7185 34.152L96.6545 34.216C96.5905 34.664 96.2705 35.048 96.5265 35.56C96.5905 35.688 96.5905 35.752 96.5265 35.88C96.1425 36.2 95.8865 36.52 96.4625 36.904C96.5265 36.968 96.5265 37.096 96.4625 37.224C96.4625 37.352 96.3345 37.544 96.2705 37.736C96.1425 37.992 96.1425 38.248 96.3985 38.44C96.6545 38.632 96.6545 38.76 96.4625 38.952C96.2065 39.208 96.0785 39.592 96.3985 39.848C96.5265 40.04 96.6545 40.232 96.7185 40.424C96.7185 40.424 96.7185 40.488 96.7185 40.552V40.744C96.4625 41.448 96.7825 42.088 96.9105 42.792C96.9745 43.304 97.2305 43.752 97.6145 44.072C97.8065 44.264 97.9985 44.456 98.1905 44.584C98.4465 44.776 98.7025 45.032 98.9585 45.032C99.4705 45.096 99.9825 45.224 100.495 45.288C101.007 45.288 101.391 45.16 101.775 44.904C102.479 44.264 103.055 43.56 103.439 42.728C103.823 41.896 104.143 41.064 104.527 40.232C104.591 40.04 104.655 39.848 104.847 39.656C105.167 39.336 105.359 38.952 105.295 38.504C105.295 38.184 105.743 37.992 105.487 37.672L105.551 37.608C105.679 37.48 105.807 37.288 105.999 37.224L106.319 36.84C106.51 36.456 106.767 36.072 107.023 35.688C107.279 35.368 107.47 35.112 107.47 34.728C107.47 34.344 107.727 34.152 107.919 33.96C108.303 33.96 108.431 33.64 108.559 33.448C109.071 32.744 109.263 31.912 109.903 31.4C109.967 31.336 109.903 31.272 109.967 31.208C110.031 31.08 110.031 30.888 110.095 30.824C110.287 30.696 110.415 30.568 110.543 30.44C110.799 31.08 110.351 31.848 110.287 32.488C110.095 33.512 110.095 34.472 109.839 35.432C109.327 37.032 109.455 39.08 109.455 40.808C109.455 41.64 109.263 42.472 109.519 43.304C109.647 43.624 109.903 43.816 110.031 44.136C110.095 44.2 110.095 44.328 110.095 44.392C110.223 44.648 110.479 44.776 110.671 44.968C110.863 45.16 110.927 45.416 111.183 45.544C111.375 45.672 111.631 45.736 111.887 45.8C112.335 45.992 112.655 46.12 113.103 45.864C113.487 45.736 113.743 45.544 113.999 45.288V45.224C114.51 44.648 114.831 43.944 115.151 43.24C115.471 42.472 115.919 41.832 116.303 41.064C117.199 39.464 118.095 37.736 118.927 36.072C119.375 35.24 119.823 34.344 120.271 33.448C120.399 33.256 120.463 33 120.527 32.808C120.591 32.616 120.719 32.424 120.847 32.168C120.911 31.912 121.039 31.72 121.103 31.464C121.167 31.208 121.487 31.144 121.423 30.824C121.359 30.568 121.679 30.504 121.743 30.312C122.127 29.48 122.575 28.648 123.023 27.88C123.663 26.472 124.623 25.32 125.455 24.04C125.519 23.976 125.583 23.912 125.711 23.848L125.775 23.784V23.848H125.711C125.711 24.104 125.647 24.296 125.583 24.552C125.327 25.128 125.135 25.768 124.943 26.408C124.495 27.944 123.983 29.544 123.471 31.08C122.959 32.488 122.511 33.96 121.999 35.432C121.871 35.752 121.807 36.072 121.871 36.392C121.807 36.456 121.743 36.52 121.743 36.584C121.615 36.904 121.487 37.224 121.679 37.608C121.359 38.504 121.167 39.4 120.975 40.296C120.975 40.488 120.911 40.744 120.783 40.936C120.463 41.768 120.463 41.768 120.463 42.6L120.399 42.856C120.271 43.688 120.079 44.52 119.823 45.352L119.759 45.608C119.887 45.992 119.951 46.376 119.823 46.696C119.695 47.08 119.951 47.4 119.695 47.784C119.695 48.616 119.695 49.448 119.759 50.344C119.759 50.728 119.887 51.112 119.887 51.496C119.887 51.88 119.951 52.264 120.015 52.648C119.695 53.096 120.207 53.416 120.271 53.736C120.271 53.864 120.271 53.928 120.271 54.056V55.016C120.271 55.272 120.335 55.4 120.527 55.528C120.655 55.592 120.719 55.72 120.719 55.848C120.719 55.976 120.783 56.168 120.847 56.232C121.615 57.064 123.279 58.216 124.559 57.896C124.751 57.896 124.943 57.96 125.135 57.768C125.327 57.64 125.199 57.448 125.199 57.256C125.199 57.128 125.327 57 125.327 56.936C125.327 56.744 125.199 56.616 125.199 56.488C125.071 56.168 124.943 55.848 124.943 55.528C124.879 54.952 124.623 54.44 124.623 53.864C124.623 53.8 124.559 53.672 124.495 53.608C124.303 53.48 124.367 53.352 124.431 53.16C124.495 53.096 124.495 52.968 124.495 52.904C124.239 52.456 124.367 52.008 124.367 51.56C124.303 51.112 124.175 50.6 124.431 50.152C124.495 50.024 124.367 49.832 124.367 49.64C124.303 49.384 124.303 49.128 124.303 48.872C124.367 48.68 124.687 48.552 124.431 48.296C124.303 48.04 124.495 47.784 124.495 47.528C124.559 47.016 124.687 46.568 124.687 46.056C124.751 45.032 124.943 44.072 125.455 43.176C125.519 42.92 125.455 42.728 125.263 42.536C125.263 42.344 125.263 42.088 125.391 41.896C125.775 41.384 125.903 40.744 125.903 40.104C125.839 39.144 126.287 38.312 126.351 37.416C126.351 37.288 126.415 37.224 126.479 37.096C126.671 36.84 126.735 36.52 126.735 36.2C126.799 35.56 127.119 34.984 127.247 34.408C127.375 34.088 127.439 33.832 127.503 33.576C127.631 32.936 127.823 32.36 127.951 31.72C127.951 31.336 128.207 31.016 128.335 30.632C128.463 30.312 128.527 29.992 128.719 29.736C129.167 28.968 129.295 28.008 129.615 27.24C129.679 26.408 130.191 25.64 130.127 24.808C130.382 24.232 130.255 23.592 130.382 22.952C130.575 22.248 130.382 21.48 130.062 20.776Z"
      fill="#000000"
    />
  </svg>
);

export default Logo;
