import {
    Stack, 
    Image,
    StackDivider,
    Text,
    Center
  } from "@chakra-ui/react";
const Stepper = ({activeStep}) => {
    const steps = [
        {
            label: "Team Registration",
            stepNumber: 1
        },
        {
            label: "Team Member Registration",
            stepNumber: 2
        },
        {
            label: "Confirmation",
            stepNumber: 3
        },
        {
            label: "Requirements",
            stepNumber: 4
        },
        {
            label: "Payment",
            stepNumber: 5
        }
    ]
    return(
        <>
            <Stack direction="row" spacing="78px" divider={<StackDivider borderColor="#C4C4C4" dir="row" transform="rotate(90deg)" />}>
                {steps.map((el, index) => {
                    if (el.stepNumber < activeStep) {
                        return(
                            <Center>
                                <Stack align="center">
                                    <Image src="/images/completedStep.svg" alt="" boxSize="36px" minW="36px" />
                                </Stack>
                            </Center>
                            
                        )
                    } else if (el.stepNumber == activeStep) {
                        return(
                            <Center>
                                <Stack align="center">
                                <Image src="/images/activeStep.svg" alt="" boxSize="36px" minW="36px" />
                                </Stack>
                            </Center>
                        )
                    } else {
                        return(
                            <Center>
                                <Stack align="center">
                                <Image src="/images/incompleteStep.svg" alt="" boxSize="36px" minW="36px" />
                                </Stack>
                            </Center>
                        )
                    }
                })}
                
                
            </Stack>
            
        </>
        
    )
}
export default Stepper