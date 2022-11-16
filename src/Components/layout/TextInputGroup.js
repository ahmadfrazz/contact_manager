import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


const TextInputGroup = ({ label, type, name, placeholder, value, onChange, error }) => {
                return (
                    
                    <div className="form-group mb-3">
                        <label htmlFor={name} style={{fontWeight: 600}} >
                            {label}
                        </label>
                        <input 
                            type={type}
                            name={name}
                            className={
                                classnames(
                                    'form-control form-control-lg mt-2', {'is-invalid': error}
                                )
                            }
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                        />
                        {error ? <div className="invalid-feedback">{error}</div> : null}
                    </div>
                )
}

TextInputGroup.propTypes= {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;
