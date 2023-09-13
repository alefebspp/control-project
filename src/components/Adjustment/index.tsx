import {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
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
  ReviewerAvatar,
  AvatarIcon,
} from './styles';

import {useAuthContext} from '../../hooks/useAuth';

export const Adjustment = ({adjustment}: AdjustmentProps) => {
  const {user} = useAuthContext();

  const [statusColor, setStatusColor] = useState<string>('');

  const [activeDetailsContainer, setActiveDetailsContainer] =
    useState<boolean>(false);

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
        {adjustment.status == 'REJECTED' ||
          (adjustment.status == 'ACCEPTED' && (
            <Detail>
              <DetailLabel>Revisado por:</DetailLabel>
              <DetailLabel weight={400}>
                {` ${adjustment.adjustment_reviewer?.name} ${adjustment.adjustment_reviewer?.surname}`}
              </DetailLabel>
            </Detail>
          ))}
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
        <DetailLabel weight={400}>
          Data do registro: {formatDateToDayMonth(adjustment.registry.date)}
        </DetailLabel>
        <StatusLabel color={statusColor}>
          {convertStatusLabel(adjustment.status)}
        </StatusLabel>
      </StatusDetailsContainer>
      {adjustment.reviewer && (
        <StatusDetailsContainer>
          <DetailLabel weight={400}>Revisado por:</DetailLabel>
          {adjustment.adjustment_reviewer?.avatar ? (
            <ReviewerAvatar
              source={{uri: adjustment.adjustment_reviewer?.avatar}}
            />
          ) : (
            <AvatarIcon />
          )}
          <DetailLabel
            weight={
              400
            }>{`${adjustment.adjustment_reviewer?.name} ${adjustment.adjustment_reviewer?.surname}`}</DetailLabel>
        </StatusDetailsContainer>
      )}
    </StatusContainer>
  );
};
