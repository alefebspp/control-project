import {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';
import {useQueryClient} from '@tanstack/react-query';
import {AdjustmentProps} from './interface';
import {
  convertRegistryType,
  convertStatusLabel,
  formatDateToDayMonth,
} from '../../utils';
import {
  StatusContainer,
  StatusIconContainer,
  PendingIcon,
  AcceptedIcon,
  StatusDetailsContainer,
  DetailLabel,
  StatusLabel,
  RejectedIcon,
  DetailsContainer,
  TitleContainer,
  CloseButton,
  DetailsContentContainer,
  Detail,
  ResponseContainer,
  ValidateButtonContainer,
  ValidateButton,
} from './styles';

import {useAuthContext} from '../../hooks/useAuth';
import {useAdjustmentsRequests} from '../../hooks/useAdjustmentsRequests';
import {useRegistriesRequests} from '../../hooks/useRegistriesRequests';

export const Adjustment = ({adjustment}: AdjustmentProps) => {
  const {user} = useAuthContext();

  const [statusColor, setStatusColor] = useState<string>('');

  const [activeDetailsContainer, setActiveDetailsContainer] =
    useState<boolean>(false);

  const [requestIsLoading, setRequestIsLoading] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const {useValidateAdjustmentRequest} = useAdjustmentsRequests({queryClient});

  const {useUpdateRegistryMutation} = useRegistriesRequests({queryClient});

  const {mutateAsync: validateAdjustment} = useValidateAdjustmentRequest();

  const {mutateAsync: updateRegistry} = useUpdateRegistryMutation();

  const {COLORS, FONT_SIZE} = useTheme();

  const collaboratorName = `${adjustment.collaborator.name} ${adjustment.collaborator.surname}`;

  const userName = `${user?.user_name} ${user?.user_surname}`;

  const defineStatusColor = (status: string | undefined) => {
    switch (status) {
      case 'PENDING':
        setStatusColor(COLORS.PENDING);
        break;
      case 'ACCEPTED':
        setStatusColor(COLORS.ACCEPTED);
        break;
      case 'REJECTED':
        setStatusColor(COLORS.ERROR);
        break;
    }
  };

  const handleValidateAdjustment = async (newStatus: string) => {
    setRequestIsLoading(true);
    const evaluatedAdjustment = await validateAdjustment({
      adjustment_id: adjustment.id,
      data: {
        reviewer: user?.user_id,
        new_status: newStatus,
      },
    });
    setRequestIsLoading(false);
  };

  useEffect(() => {
    defineStatusColor(adjustment.status);
  }, [adjustment]);

  return activeDetailsContainer ? (
    <DetailsContainer>
      <TitleContainer color={statusColor}>
        <StatusLabel color={COLORS.WHITE}>
          {convertStatusLabel(adjustment.status)}
        </StatusLabel>
        <CloseButton
          onPress={() => setActiveDetailsContainer(!activeDetailsContainer)}>
          <RejectedIcon size={26} />
        </CloseButton>
      </TitleContainer>
      <DetailsContentContainer>
        <Detail>
          <DetailLabel size={FONT_SIZE.XS}>
            Requisitado por:
            {
              <DetailLabel weight={400}>
                {userName == collaboratorName
                  ? ' Você'
                  : ` ${collaboratorName}`}
              </DetailLabel>
            }
          </DetailLabel>
        </Detail>
        <Detail>
          <DetailLabel size={FONT_SIZE.XS}>
            Correção em:
            {
              <DetailLabel weight={400}>{` ${convertRegistryType(
                adjustment.registry_type,
              )}`}</DetailLabel>
            }
          </DetailLabel>
        </Detail>
        <Detail>
          <DetailLabel size={FONT_SIZE.XS}>
            Anterior:
            {
              <DetailLabel weight={400}>{` ${
                adjustment.previous_value ? adjustment.previous_value : ' --'
              }`}</DetailLabel>
            }
          </DetailLabel>
        </Detail>
        <Detail>
          <DetailLabel>
            Corrigir para:
            {
              <DetailLabel
                weight={400}>{` ${adjustment.new_value}`}</DetailLabel>
            }
          </DetailLabel>
        </Detail>
        <Detail>
          <DetailLabel>
            Local anterior:
            {
              <DetailLabel weight={400}>{` ${
                adjustment.registry_location
                  ? adjustment.registry_location
                  : ' --'
              }`}</DetailLabel>
            }
          </DetailLabel>
        </Detail>
        <Detail>
          <DetailLabel>
            Novo local:
            {
              <DetailLabel
                weight={400}>{` ${adjustment.new_location}`}</DetailLabel>
            }
          </DetailLabel>
        </Detail>
        <Detail>
          <DetailLabel>
            Motivo:
            {<DetailLabel weight={400}>{` ${adjustment.reason}`}</DetailLabel>}
          </DetailLabel>
        </Detail>
        {adjustment.status == 'REJECTED' || adjustment.status == 'ACCEPTED' ? (
          <Detail>
            <DetailLabel>Revisado por:</DetailLabel>
            <DetailLabel weight={400}>
              {` ${adjustment.request_reviewer?.name} ${adjustment.request_reviewer?.surname}`}
            </DetailLabel>
          </Detail>
        ) : (
          <ResponseContainer color={COLORS.WHITE}>
            <DetailLabel>Avalie a requisição</DetailLabel>
            <ResponseContainer color={COLORS.WHITE} rowDirection={true}>
              <ValidateButtonContainer>
                <ValidateButton
                  onPress={() => handleValidateAdjustment('ACCEPTED')}
                  color={COLORS.ACCEPTED}>
                  {requestIsLoading ? (
                    <ActivityIndicator size="small" color={COLORS.WHITE} />
                  ) : (
                    <AcceptedIcon size={26} />
                  )}
                </ValidateButton>
                <DetailLabel weight={400}>ACEITAR</DetailLabel>
              </ValidateButtonContainer>
              <ValidateButtonContainer>
                <ValidateButton
                  onPress={() => handleValidateAdjustment('REJECTED')}
                  color={COLORS.ERROR}>
                  {requestIsLoading ? (
                    <ActivityIndicator size="small" color={COLORS.WHITE} />
                  ) : (
                    <RejectedIcon size={26} />
                  )}
                </ValidateButton>
                <DetailLabel weight={400}>REJEITAR</DetailLabel>
              </ValidateButtonContainer>
            </ResponseContainer>
          </ResponseContainer>
        )}
      </DetailsContentContainer>
    </DetailsContainer>
  ) : (
    <StatusContainer
      onPress={() => setActiveDetailsContainer(!activeDetailsContainer)}>
      <StatusIconContainer color={statusColor}>
        {adjustment.status == 'PENDING' ? (
          <PendingIcon size={36} />
        ) : adjustment.status == 'ACCEPTED' ? (
          <AcceptedIcon size={36} />
        ) : (
          <RejectedIcon size={36} />
        )}
      </StatusIconContainer>
      <StatusDetailsContainer>
        <DetailLabel>
          Data do registro: {formatDateToDayMonth(adjustment.registry.date)}
        </DetailLabel>
        <DetailLabel>
          Status:{' '}
          {
            <StatusLabel color={statusColor}>
              {convertStatusLabel(adjustment.status)}
            </StatusLabel>
          }
        </DetailLabel>
      </StatusDetailsContainer>
    </StatusContainer>
  );
};
